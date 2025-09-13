pipeline {
    agent any

    environment {
        // 目标服务器信息
        REMOTE_HOST = '39.96.169.147'
        REMOTE_USER = 'root'
        REMOTE_DIR  = '/root/arrayDanceFrontEnd'
        // Jenkins 中配置的 SSH 私钥凭证 ID
        SSH_CRED_ID = 'da9195b8-3980-4622-a371-74501205389d'
    }

    stages {
        stage('Checkout Code') {
            steps {
                // 从 Git 拉取代码（Jenkins 所在机器）
                git branch: 'main', url: 'https://github.com/xiajia666/arrayDanceFrontEnd.git'
            }
        }

        stage('Deploy and Build on Remote Server') {
            steps {
                script {
                    sshagent([SSH_CRED_ID]) {
                        sh """
                            ssh -o StrictHostKeyChecking=no ${REMOTE_USER}@${REMOTE_HOST} '
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
                                # 使用 nohup 在后台运行，并输出日志到文件
                                nohup npm run dev > frontend.log 2>&1 &

                                echo ">>> 服务启动完成，查看进程："
                                ps aux | grep "npm run dev" | grep -v grep
                            '
                        """
                    }
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