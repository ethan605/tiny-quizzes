FROM mhart/alpine-node

WORKDIR /var/lib/nextjs
COPY . /var/lib/nextjs

RUN yarn install
RUN yarn build
RUN echo "[Tiny Quizzes] DONE!"

EXPOSE 3000
# CMD ["yarn", "start"]