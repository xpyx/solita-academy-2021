FROM node:15.5.1-alpine3.10
RUN mkdir -p /opt/app
WORKDIR /opt/app
RUN npm install --global expo-cli
RUN adduser --disabled-password app
COPY . .
RUN chown -R app:app /opt/app
USER app
RUN npm install
EXPOSE 19000 19001 19002
CMD [ "expo", "start" ]
