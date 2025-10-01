#!/bin/bash

# 初始化Git倉庫
git init

# 添加所有文件到暫存區
git add .

# 提交更改
git commit -m "Initial commit: Gym Hero Quiz Game"

# 設置主分支為main
git branch -M main

# 添加遠程倉庫
git remote add origin https://github.com/iisanosbb/gymhero.git

# 推送到GitHub
git push -u origin main
