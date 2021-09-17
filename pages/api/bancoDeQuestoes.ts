import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/resposta";

const questoes: QuestaoModel[] = [
    new QuestaoModel(306, 'Historicamente a notificação compulsória tem sido a principal fonte da vigilância epidemiológica.\n\nDada a natureza específica de cada doença ou agravo à saúde, a notificação deve seguir um processo dinâmico, variável em função das mudanças no perfil epidemiológico, dos resultados obtidos com as ações de controle e da disponibilidade de novos conhecimentos científicos e tecnológicos.\n\nSão parâmetros para inclusão de doenças e agravos na lista de notificação compulsória, exceto:', [
        RespostaModel.errada('transcendência.'),
        RespostaModel.errada('vulnerabilidade.'),
        RespostaModel.errada('compromissos internacionais.'),
        RespostaModel.certa('representatividade.'),
    ]),
    new QuestaoModel(202, 'Marque a alternativa que NÃO apresenta uma enfermidade prevista na relação de doenças e agravos de Notificação compulsória no âmbito do Estado do Rio de Janeiro.', [
        RespostaModel.errada('botulismo.'),
        RespostaModel.errada('febre amarela.'),
        RespostaModel.errada('hanseníase.'),
        RespostaModel.certa('bronquite.'),
    ]),
    new QuestaoModel(203, 'Notificação é a comunicação da ocorrência de determinada doença ou agravo à saúde, feita à autoridade sanitária por profisionais de saúde ou qualquer cidadão, para fins de adoçao de medidas de intervenção pertinentes. Os parâmetros para inclusão de doenças e agravos na lista de notificação compulsória devem obedecer a alguns critérios como a magnitude, que é:', [
        RespostaModel.errada('Representada pelo elevado poder de transmissão da doença, através de vetores ou outras fontes de infecção,colocando sob risco a saúde coletiva.'),
        RespostaModel.errada('Expressa por características subsidiárias que conferem relevância especial à doença ou agravo, destacando-se: severidade, medida por taxas de letalidade, de hospitalização e de sequelas.'),
        RespostaModel.errada('Medida pela disponibilidade concreta de instrumentos específicos de prevenção e controle da doença, propiciando a atuação efetiva dos serviços de saúde sobre indivíduos e coletividades.'),
        RespostaModel.certa('Aplicável a doenças de elevada frequência, que afetam grandes contingentes populacionais e se traduzem por altas taxas de incidência, prevalência, mortalidade e anos potenciais de vida perdidos.'),
    ]),
    new QuestaoModel(204, 'De acordo com a Portaria GM/MS nº 204/2016, são agravos de notificação compulsória, EXCETO:', [
        RespostaModel.errada('Poliomielite.'),
        RespostaModel.errada('Raiva humana.'),
        RespostaModel.errada('óbito com suspeita de doença pelo vírus Zika.'),
        RespostaModel.certa('Neurocisticercose.'),
    ]),
    new QuestaoModel(205, 'Algumas doenças são de Notificação Compulsória de doenças, agravos e eventos de saúde pública nos serviços de saúde públicos e privados em todo o território nacional, por meio da Portaria n° 204, de 17 de fevereiro de 2016. Com base nessa lista, assinale a alternativa que contenha somente doenças, agravos e eventos de saúde pública de notificação compulsória.', [
        RespostaModel.errada('Esquistossomose, dengue, febre de Chikungunya e ascaridíase.'),
        RespostaModel.errada('Infecção pelo vírus da imunodeficiência humana, hepatites virais, acidente de trabalho com exposição a material biológico e filariose.'),
        RespostaModel.errada('Hanseníase, tuberculose, sífilis, papilomavírus humano.'),
        RespostaModel.certa('Leptospirose, intoxicação exógena, violência interpessoal e/ou autoprovocada, raiva.'),
    ]),
    new QuestaoModel(206, 'O Ministério da Saúde define periodicamente a lista nacional de notificação compulsória de doenças, agravos e eventos de saúde pública nos serviços públicos e privados em todo o território nacional. A inclusão de doenças e agravos nessa lista está condicionada a alguns critérios, tais como a transcendência, que se expressa por meio de características subsidiárias, que conferem relevância especial à doença ou agravo. Entre essas características, destacam-se:', [
        RespostaModel.errada('a vulnerabilidade, a relevância econômica e o potencial de disseminação.'),
        RespostaModel.errada('o potencial de disseminação, a relevância social e a magnitude.'),
        RespostaModel.errada('a severidade, a relevância social e a relevância econômica.'),
        RespostaModel.certa('a magnitude, a vulnerabilidade e a severidade.'),
    ]),
    new QuestaoModel(207, 'Considerando as ações de saúde no âmbito da saúde coletiva, o Ministério da Saúde, por meio da Portaria nº 204, de 17.02.2016, estabelece como doenças e agravos de notificação compulsória imediata à Secretaria Municipal de Saúde, entre outros itens:', [
        RespostaModel.errada('A hanseníase, as doenças sexualmente transmissíveis (DST) e a gripe de qualquer etiologia.'),
        RespostaModel.errada('O acidente de trabalho com exposição a material biológico, os acidentes de trânsito e as doenças sexualmente transmissíveis (DST).'),
        RespostaModel.errada('A tuberculose extra pulmonar, a toxoplasmose gestacional e o óbito infantil.'),
        RespostaModel.certa('A acidente de trabalho grave, fatal e em crianças e adolescentes, a doença aguda pelo vírus Zika em gestante e a leptospirose.'),
    ]),
    new QuestaoModel(208, 'A respeito das doenças de notificação compulsória, abaixo listada, uma delas deverá ser notificada imediatamente. Sobre esta, assinale a alternativa correta.', [
        RespostaModel.errada('Hepatite viral'),
        RespostaModel.errada('Hanseníase'),
        RespostaModel.errada('Esquistossomose'),
        RespostaModel.certa('Febre tifoide'),
    ]),
    new QuestaoModel(209, 'Na Portaria de Consolidação nº 4/2017 em seu Anexo 1 do Anexo V possui uma lista nacional de notificação compulsória. Sendo assim, analise as doenças compulsórias descritas abaixo e assinale a alternativa incorreta.', [
        RespostaModel.errada('Toxoplasmose gestacional.'),
        RespostaModel.errada('Hanseníase.'),
        RespostaModel.errada('Tuberculose.'),
        RespostaModel.certa('Mal de Alzheimer.'),
    ]),
    new QuestaoModel(210, 'Todo caso suspeito de febre amarela deve ser prontamente comunicado por telefone, fax ou e-mail às autoridades porque:', [
        RespostaModel.errada('os exames para confirmação são desnecessários.'),
        RespostaModel.errada('o tratamento é específico e controlado.'),
        RespostaModel.errada('é uma doença grave, transmissível pessoa a pessoa.'),
        RespostaModel.certa('tem risco de dispersão para outras áreas.'),
    ]),
    new QuestaoModel(211, 'De acordo com a Portaria nº 204, de 17 de fevereiro de 2016, que define a Lista Nacional de Notificação Compulsória de doenças, agravos e eventos de saúde pública nos serviços de saúde públicos e privados em todo o território nacional, nos termos do anexo, e dá outras providências, as doenças que tem periodicidade de notificação imediata ( <  ou igual 24 horas) para as três esferas (Ministério da Saúde, Secretaria Estadual de Saúde e Secretaria Municipal de Saúde) são:', [
        RespostaModel.errada('Cólera, HIV / AIDS e Hepatite.'),
        RespostaModel.errada('Hanseníase, Tuberculose Extrapulmonar e Leishmaniose Visceral.'),
        RespostaModel.errada('Leishmaniose Tegumentar, Esquistossomose e Hepatite Viral.'),
        RespostaModel.certa('Ebola, Dengue (Óbitos) e Coqueluche.'),
    ]),
    new QuestaoModel(212, 'Com base na Portaria nº 1.271, de 6 de junho de 2014, que define a Lista Nacional de Notificação Compulsória de doenças, agravos e eventos de saúde pública nos serviços de saúde públicos e privados em todo o território nacional, é correto afirmar que:', [
        RespostaModel.errada('Os acidentes de trabalho graves, fatais e em crianças e adolescentes são de notificação semanal.'),
        RespostaModel.errada('A notificação compulsória imediata deve ser feita até 12 horas após a confirmação diagnóstica do agravo.'),
        RespostaModel.errada('O registro dos agravos de notificação compulsória deve ser feito prioritariamente pelos médicos.'),
        RespostaModel.certa('A comunicação dos agravos de notificação compulsória também deve ser realizada pelos responsáveis por estabelecimentos privados educacionais e instituições de pesquisa.'),
    ]),
    new QuestaoModel(213, 'Consiste na comunicação obrigatória à autoridade sanitária da ocorrência de determinada doença ou agravo à saúde ou surto, feita por profissional de saúde ou qualquer cidadão, visando à adoção das medidas de intervenção pertinentes. O enunciado refere-se à:', [
        RespostaModel.errada('notificação contínua.'),
        RespostaModel.errada('notificação negativa.'),
        RespostaModel.errada('notificação aleatória.'),
        RespostaModel.certa('notificação compulsória.'),
    ]),
    new QuestaoModel(214, 'As seguintes ocorrências são de notificação compulsória imediata (em menos de 24 horas) ao Ministério da Saúde:', [
        RespostaModel.errada('cólera; doença de Chagas; antraz pneumônico; hantavirose; doença pelo vírus Zika'),
        RespostaModel.errada('cólera; botulismo; dengue; varíola; sífilis'),
        RespostaModel.errada('cólera; febre amarela; poliomielite; HIV-Aids; tétano'),
        RespostaModel.certa('ebola; varíola; raiva humana; óbito por dengue'),
    ]),
    new QuestaoModel(215, 'Qual, das doenças NÃO faz parte do Sistema Nacional de Agravos Notificáveis ?', [
        RespostaModel.errada('Sarampo.'),
        RespostaModel.errada('Varíola.'),
        RespostaModel.errada('Tuberculose.'),
        RespostaModel.certa('Erisipela.'),
    ]),
]

export default questoes