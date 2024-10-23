@chcp 65001 >nul
@echo off
echo.
echo [信息] 推送代码到 Git 仓库。
echo.

%~d0
cd %~dp0

cd ..

git add .

set datetime=%date%_%time:~0,2%-%time:~3,2%-%time:~6,2%
git commit -m "自动提交：%datetime%"

git push origin master

pause
