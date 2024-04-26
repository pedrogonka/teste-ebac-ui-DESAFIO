pipeline {
agent any

stages {
    stage ('Clonar repositorio') {
        git branch: 'main', url: 'https://github.com/pedrogonka/teste-ebac-ui-DESAFIO.git'
    }
}

stage ('Instalar dependencias'){
    steps{
        sh 'npm install'
    }
}

stage('Executar testes') {
    steps {
        sh 'no_color=1 npm run cy:run'
    }
}

}
