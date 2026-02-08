# Build stage - must come first since it's referenced by the nginx stage
FROM node:18 AS builder
WORKDIR /app

# Enable corepack to get pnpm (matches packageManager in package.json)
RUN corepack enable && corepack prepare pnpm@9.15.4 --activate

# Copy package files first for better layer caching
COPY package.json pnpm-lock.yaml* pnpm-workspace.yaml* ./
COPY apps/web/package.json ./apps/web/
COPY packages/*/package.json ./packages/

# Install dependencies with pnpm
RUN pnpm install --frozen-lockfile || pnpm install

# Copy source files and build
COPY . .
RUN pnpm run build

# Production stage - nginx to serve the built files
FROM nginx:latest
WORKDIR /app
RUN useradd --no-create-home --shell /bin/false app
RUN mkdir -p /var/run && chown -R app:app /var/run
RUN mkdir -p /var/cache/nginx && chown -R app:app /var/cache/nginx
COPY --from=builder /app/apps/web/dist /app/public
COPY /docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf
USER root
