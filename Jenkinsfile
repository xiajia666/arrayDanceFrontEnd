pipeline {
    agent any

    environment {
        REMOTE_HOST = '39.96.169.147'
        REMOTE_USER = 'root'
        REMOTE_DIR  = '/root/arrayDanceFrontEnd'
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
                    // 使用单引号避免转义问题
                    sh '''
                        expect -c "
                            set timeout 30
                            spawn ssh -o StrictHostKeyChecking=no root@39.96.169.147
                            expect {
                                \"password:\" {
                                    send \"''' + SERVER_PASSWORD + '''\\r\"
                                    exp_continue
                                }
                                \"yes/no\" {
                                    send \"yes\\r\"
                                    exp_continue
                                }
                                \"# \" {}
                                \"\\$ \" {}
                            }
                            send \"cd /root/arrayDanceFrontEnd\\r\"
                            send \"git pull origin main\\r\"
                            send \"npm install\\r\"
                            send \"pkill -f \\\"npm run dev\\\" || true\\r\"
                            send \"sleep 2\\r\"
                            send \"nohup npm run dev > frontend.log 2>&1 &\\r\"
                            send \"echo \\\"✅ 部署完成！\\\"\\r\"
                            send \"exit\\r\"
                            expect eof
                        "
                    '''
                }
            }
        }
    }
}