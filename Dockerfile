# Install dependencies only when needed
FROM node:16-alpine AS dependencies

RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile


# Rebuild the src code only when needed
FROM node:16-alpine AS builder

WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN yarn build && yarn install --production --ignore-scripts --prefer-offline


# Production image, copy all the files and run next
FROM node:16-alpine AS runner

WORKDIR /app
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
ENV PORT 3000

RUN adduser -S nextjs -u 1001 -G node

COPY --from=builder /app/next.config.js /app/package.json /app/yarn.lock /app/.env ./
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:node /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/src ./src

USER nextjs

EXPOSE 3000

CMD [ "./node_modules/.bin/next", "start" ]
