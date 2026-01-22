FROM php:8.2-cli-alpine

# Set working directory
WORKDIR /app

# 1. Use the official extension installer image to get the script
# This avoids downloading it via curl (resolves network timeouts)
COPY --from=mlocati/php-extension-installer /usr/bin/install-php-extensions /usr/local/bin/

# 2. Install MongoDB & ZIP & System Utils
# The script automatically installs system dependencies (git, unzip, etc.) needed for these
# AND it installs pre-built binaries for MongoDB if available (Avoiding OOM compilation)
RUN install-php-extensions \
    mongodb \
    zip \
    unzip \
    git \
    curl \
    openssl

# 3. Install Node.js & NPM
RUN apk add --no-cache \
    nodejs \
    npm

# 4. Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# 5. Copy Composer files and install PHP deps
COPY composer.json composer.lock ./
# --ignore-platform-reqs ensures we don't fail if a minor extension is missing during install
RUN composer install --no-dev --optimize-autoloader --no-scripts --ignore-platform-reqs

# 6. Copy Package files and install JS deps
COPY package.json package-lock.json ./
RUN npm ci

# 7. Copy application files
COPY . .

# 8. Build frontend assets
RUN npm run build

# 9. Run final PHP setup
RUN php artisan config:cache \
    && php artisan route:cache \
    && php artisan view:cache

# Expose port
EXPOSE 8080

# Start command
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8080"]
