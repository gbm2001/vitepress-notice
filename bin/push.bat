@chcp 65001 >nul
@echo off
echo.
echo [信息] 推送代码到 GitHub main 分支，并构建并推送静态文件到 gh-pages 分支。
echo.

REM 切换到脚本所在盘符
%~d0

REM 切换到脚本所在目录
cd %~dp0

REM 切换到项目根目录
cd ..

REM 推送代码到 main 分支
git add .

set datetime=%date%_%time:~0,2%-%time:~3,2%-%time:~6,2%
git commit -m "Auto Commit: %datetime%"

git push origin main

echo.
echo [信息] 构建项目并推送到 GitHub gh-pages 分支。
echo.

REM 生成静态文件
npm run build

REM 进入生成的文件夹
cd docs\.vitepress\dist

REM 如果 .git 存在则跳过初始化
if not exist ".git" (
    git init
)

REM 添加并提交构建的文件
git add -A
git commit -m "deploy: %datetime%"

REM 强制推送到 gh-pages 分支
git push -f git@github.com:gbm2001/vitepress-notes.git main:gh-pages

REM 返回到项目根目录
cd %~dp0

pause
