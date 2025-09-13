pipeline {
    agent any

    environment {
        // 目标服务器信息
        REMOTE_HOST = '39.96.169.147'
        REMOTE_USER = 'root'
        REMOTE_DIR  = '/root/arrayDanceFrontEnd'
        // 服务器密码（建议使用 Jenkins 凭据管理）
        SERVER_PASSWORD = '985211xiaJIA1333@'
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/xiajia666/arrayDanceFrontEnd.git'
            }
        }

        stage('Deploy and Build on Remote Server') {
            steps {
                script {
                    sh """
                        # 使用 sshpass 进行密码登录
                        sshpass -p '${SERVER_PASSWORD}' ssh -o StrictHostKeyChecking=no ${REMOTE_USER}@${REMOTE_HOST} '
                            set -e
                            echo ">>> 进入项目目录: ${REMOTE_DIR}"
                            cd ${REMOTE_DIR}

                            echo ">>> 拉取最新代码"
                            git pull origin main

                            echo ">>> 安装依赖"
                            npm install

                            echo ">>> 停止现有服务（如果存在）"
                            pkill -f "npm run dev" || true
                            sleep 2

                            echo ">>> 启动前端服务"
                            nohup npm run dev > frontend.log 2>&1 &

                            echo ">>> 服务启动完成"
                            echo "前端服务已在后台运行，查看日志: tail -f ${REMOTE_DIR}/frontend.log"
                        '
                    """
                }
            }
        }
    }

    post {
        success {
            echo '✅ 前端构建并部署成功！'
        }
        failure {
            echo '❌ 构建失败，请检查日志。'
        }
    }
}