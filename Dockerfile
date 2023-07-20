# 两个构建环境
# 构建开发环境 -> 开发依赖 -> npm run build
# 构建生产环境 -> node_modules生产过程中的依赖及.output文件
# 第一个阶段 - 构建基础镜像
ARG NODE_VERSION=18

# Build
FROM node:${NODE_VERSION}-alpine as build

USER node

WORKDIR /home/node/app

COPY --chown=node:node package.json .

RUN npm install --production=false --registry=https://registry.npmmirror.com

COPY --chown=node:node  . .

RUN npm run build
RUN npm prune

# Run
FROM node:${NODE_VERSION}-alpine

WORKDIR /home/node/app

COPY --chown=node:node  --from=build /home/node/app/.output /home/node/app/.output
# Optional, only needed if you rely on unbundled dependencies
# RUN cd /home/node/app/.output/server && npm install --production=true --registry=https://registry.npmmirror.com

CMD [ "node", ".output/server/index.mjs" ]


# # 使用 Node.js 14 作为基础镜像
# FROM node:14

# # 设置工作目录
# WORKDIR /app

# # 复制 package.json 和 package-lock.json 到工作目录
# COPY package*.json ./

# # 安装依赖
# RUN npm install

# # 复制整个项目到工作目录
# COPY . .

# # 构建 Nuxt.js 应用
# RUN npm run build

# # 设置环境变量
# ENV HOST 0.0.0.0
# ENV PORT 3000

# # 暴露端口
# EXPOSE 3000

# # 运行应用
# CMD [ "npm", "run", "start" ]
