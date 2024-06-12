pipeline {
    agent any

    stages{
        
        stage('Build Image') {
            steps {
                script {
                    dockerapp = docker.build("viniciuscaol/counterapp:V1.${env.BUILD_ID}", '-f ./Dockerfile .')
                }
            }
        }

        stage('Push Image') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
                        dockerapp.push('latest')
                        dockerapp.push("V1.${env.BUILD_ID}")
                    }
                }
            }
        }

        // stage('Deploy') {
        //     steps {
        //         sh 'kubectl apply -f ./k8s/ -R'
        //     }
        // }
    }
}