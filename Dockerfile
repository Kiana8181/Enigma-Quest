From node:19-alpine3.16

WORKDIR /usr/src/app

EXPOSE 5173

COPY . .

RUN npm install --force

RUN npm run build

CMD ["npm", "run", "dev"]