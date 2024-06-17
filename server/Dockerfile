# Dockerfile
FROM jenkins/jenkins:latest

# Switch to the root user
USER root

# Install Node.js and Yarn
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g yarn

# Switch back to the jenkins user
USER jenkins

