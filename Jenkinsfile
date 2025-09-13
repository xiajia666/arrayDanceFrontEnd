pipeline {
    agent any

    environment {
        // 目标服务器信息
        REMOTE_HOST = '39.96.169.147'
        REMOTE_USER = 'root'
        REMOTE_DIR  = '/root/arrayDanceFrontEnd'
        // 服务器密码
        SERVER_PASSWORD = '985211xiaJIA1333@'
    }

    stages {
        stage('Checkout Code') {
            steps {
                // 从 Git 拉取代码
                git branch: 'main', url: 'https://github.com/xiajia666/arrayDanceFrontEnd.git'
            }
        }

        stage('Deploy and Build on Remote Server') {
            steps {
                script {
                    // 使用 SSH 直接连接并执行部署命令
                    sh """
                        # 使用 EOF 方式传递密码和命令
                        ssh -o StrictHostKeyChecking=no -o PasswordAuthentication=yes ${REMOTE_USER}@${REMOTE_HOST} << EOF
                        ${SERVER_PASSWORD}
                        cd ${REMOTE_DIR}
                        git pull origin main
                        npm install
                        pkill -f "npm run dev" || true
                        sleep 2
                        nohup npm run dev > frontend.log 2>&1 &
                        echo "✅ 部署完成！"
                        exit
EOF
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