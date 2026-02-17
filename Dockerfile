FROM nginx:1.27.4-alpine
ARG APPLICATION
COPY nginx.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/html
COPY dist/$APPLICATION/browser .
RUN ls -laR .
EXPOSE 80
