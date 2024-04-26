pipeline {
agent any

stages {
    stage('Clonar repositório') {
        steps {
            checkout([$class: 'GitSCM', branches: [[name: 'main']], userRemoteConfigs: [[url: 'https://github.com/pedrogonka/teste-ebac-ui-DESAFIO.git']]])
        }
    }
    stage('Instalar dependências') {
        steps {
        sh 'npm install'
    }
}

stage('Executar testes') {
    steps {
        sh 'no_color=1 npm run cy:run'
    }
}

}
