@echo off
echo.
echo [信息] 推送代码到 Git 仓库。
echo.

REM 切换到脚本所在盘符
%~d0

REM 切换到脚本所在目录
cd %~dp0

REM 切换到项目根目录 (可以根据需要修改路径)
cd ..

REM 添加所有更改的文件
git add .

REM 提交更改，使用当前日期和时间作为提交信息
set datetime=%date%_%time:~0,2%-%time:~3,2%-%time:~6,2%
git commit -m "自动提交：%datetime%"

REM 推送到远程仓库的主分支 (根据需要修改分支名称)
git push origin master

pause
