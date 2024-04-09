FROM kuingsmile/piclist:latest

RUN mkdir -p /root/.piclist/ && chmod 777 /root/.piclist/
RUN printf '%s' "$CONFIG" | sed 's/\\/"/g' > /root/.piclist/config.json

WORKDIR /root/.piclist
EXPOSE 36677
