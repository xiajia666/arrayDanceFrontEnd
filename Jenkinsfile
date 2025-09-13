pipeline {
    agent any

    environment {
        REMOTE_HOST = '39.96.169.147'
        REMOTE_USER = 'root'
        REMOTE_DIR  = '/root/arrayDanceFrontEnd'
        SERVER_PASSWORD = '985211xiaJIA1333'
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
                        # 使用 expect 自动化 SSH 登录和命令执行
                        expect -c '
                            set timeout 30
                            spawn ssh -o StrictHostKeyChecking=no ${REMOTE_USER}@${REMOTE_HOST}
                            expect {
                                "password:" {
                                    send "${SERVER_PASSWORD}\\r"
                                    exp_continue
                                }
                                "yes/no" {
                                    send "yes\\r"
                                    exp_continue
                                }
                                "# " {}
                                "$ " {}
                            }
                            send "cd ${REMOTE_DIR}\\r"
                            send "git pull origin main\\r"
                            send "npm install\\r"
                            send "pkill -f \\\"npm run dev\\\" || true\\r"
                            send "sleep 2\\r"
                            send "nohup npm run dev > frontend.log 2>&1 &\\r"
                            send "echo \\\"✅ 部署完成！\\\"\\r"
                            send "exit\\r"
                            expect eof
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