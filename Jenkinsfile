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
                    // 使用 SSH 登录远程服务器并执行构建
                    sshagent([SSH_CRED_ID]) {
                        sh """
                            ssh -o StrictHostKeyChecking=no ${REMOTE_USER}@${REMOTE_HOST} << 'EOF'
                                set -e
                                echo '>>> 进入项目目录'
                                cd ${REMOTE_DIR}

                                echo '>>> 拉取最新代码'
                                git pull origin main

                                echo '>>> 安装依赖'
                                npm install

                                echo '>>> 进入screen'
                                screen -r arraydance

                                echo '>>> 构建前端项目'
                                npm run dev

                                echo '>>> 构建完成'
                            EOF
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