<template>
  <v-app>
    <vue-headful title="Projects-experiences" description=" " />
    <HeaderBar></HeaderBar>
    <v-main>
    <div class="mx-5">
      <v-layout justify-center px-3 py-3 row wrap>
        <v-flex text-center lg8 sm12 xs12>
          <p class="hidden-md-and-up">Projects</p>
          <!-- body -->
          <div id="project-2020">
            <v-expansion-panels flat=true>
            <v-expansion-panel>
            <v-expansion-panel-header>
              <p class="text-h6 text-center">
                <v-icon>far fa-hand-point-right</v-icon>
                News distribution system (2020)
              </p>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
            <v-card color="white" elevation="0">
              <p class="text-h6 font-italic">nondisclosure</p>
              <p class="text">Feb 2020 - April 2020</p>
              <p>
                The request of project team: sending news text automatically depending on the preference of their readers (recommendation system).
                For these requirements, I constructed the news distribution system using components of AWS, and works a serverless style.
                I also implemented admin web-application for the distribution system.
                The system selects preferred news content for each news subscriber, which is realized by machine-learning techniques.
              </p>
              <p class="text-h6 font-italic">Keywords</p>
              <p>AWS-SNS, Flask / AWS-Lambda for web-appliaction, AWS-ECS, scikit-learn</p>
            </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>

        <div>
        <v-expansion-panels flat=true>
        <v-expansion-panel>
        <v-expansion-panel-header>
          <p class="text-h6 text-center">
            <v-icon>far fa-hand-point-right</v-icon>
            Keyword extraction system (2019)
          </p>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-card color="white" max-width="1500" elevation="0">
            <p class="text-h6 font-italic">nondisclosure</p>
            <p class="text">July 2019 - Nov 2019</p>

            <p>
              The project requirement: Collecting topics described and discussed in news articles.
              I constructed a news collection system and text analysis system.
              The news collection system fetches news texts from a major news distributers,
              and the keyword extraction system picks up keywords (Named-Entity).
              The statistics of extracted keywords are visualized and saved into a HTML file.
              The system works on AWS with a serverless style.
            </p>

            <p class="text-h6 font-italic">Keywords</p>
            <p>NLP&nbsp;(for German), web-scraping, named-entity-extraction&nbsp;(Spacy), visualization, AWS-ECS</p>
          </v-card>
          </v-expansion-panel-content>
          </v-expansion-panel>
          </v-expansion-panels>
          </div>

          <div>

        <v-expansion-panels flat=true>
        <v-expansion-panel>
        <v-expansion-panel-header>
          <p class="text-h6 text-center">
              <v-icon>far fa-hand-point-right</v-icon>
              Text summarization system (2019)
          </p>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-card color="white" max-width="1500" elevation="0">
            <p class="text-h6 font-italic">nondisclosure</p>
            <p class="text">April 2019 - July 2019</p>

            <p>
              The client publishes news texts and distributes to subscribers every day.
              As the consequence of user behavior analysis on the web site, readers often stop reading the news article and leave the page.
              To enhance the readers user-experience, the text summarization system is introduced.
              I implemented the text summarization algorithm from scratch (Python), and constructed data processing pipeline on AWS.
              The system works on AWS with a serverless style.
            </p>
            <p class="text-h6 font-italic">Keywords</p>
            <p>NLP, summarization, AWS-ECS</p>
          </v-card>
          </v-expansion-panel-content>
          </v-expansion-panel>
          </v-expansion-panels>
          </div>

          <div>
        <v-expansion-panels flat=true>
        <v-expansion-panel>
        <v-expansion-panel-header>
          <p class="text-h6 text-center">
            <v-icon>far fa-hand-point-right</v-icon>
            Named-Entity extraction from review texts (2019-2020)
        </p>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-card color="white" max-width="1500" elevation="0">
            <p class="text-h6 font-italic">nondisclosure</p>
            <p class="text">Feb 2019 - Dec 2020</p>

            <p>
              The project team has a lot of review texts.
              They utilize the review text to provide a better quality of service.
              Still, hard to realize the goal without a well-maintained entity-database.
              For this purpose, I tackled it with sequence-labeling to find candidates of entities. The model was a fined-tuned Bert model. As well as, I constructed the entity-database.
              The database is constructed with semi-automated methods.
            </p>

            <p class="text-h6 font-italic">Keywords</p>
            <p>NLP, Sequence labeling, Bert, thesaurus, Google-Cloud-Platform</p>
          </v-card>
          </v-expansion-panel-content>
          </v-expansion-panel>
          </v-expansion-panels>
          </div>

          <div>
        <v-expansion-panels flat=true>
        <v-expansion-panel>
        <v-expansion-panel-header>
            <p
              class="text-h6 text-center"
            ><v-icon>far fa-hand-point-right</v-icon>
            Information Extractons from an opinion platform (2015-2018)
          </p>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-card color="white" max-width="1500" elevation="0">
            <p class="font-italic">Insight Tech Inc., Tokyo Japan</p>
            <p class="text">2015 - Nov 2018</p>

            <p>
              The startup company provides a text analytics system for the Japanese language, Running an opinion platform named "FumanKaitori".
            </p>
            <p>
              It is useful information if opinions and entities in the text are well organized.
              However, it is not easy to extract opinions, to arrange them, and to show easy-to-understand information to human-analysts.
              To overcome these difficulties, I, as a chef person, lead this project by both sides of the research aspects and implementation aspects.
              I was a person in charge of all of the workloads: from research phrase into the release of production software.
            </p>

            <p class="text-h6 font-italic">Publications</p>
            <p>
              Kensuke Mitsuzawa, Maito Tauchi, Mathieu Domoulin, Masanori Nakashima and Tomoya Mizumoto.
              FKC Corpus: a Japanese Corpus from New Opinion Survey Service.
              In proceedings of the Novel Incentives for Collecting Data and Annotation from People:
              types, implementation, tasking requirements, workflow and results, pp.11-18, Portorož, Slovenia, May 2016.
            </p>
            <p>三澤 賢佑, 成田和弥 (Insight Tech/JST), 伊藤友博 (Insight Tech), 柴田知秀, 河原大輔, 黒橋禎夫 (京大/JST). 意見分析に適した意見タグ獲得改善への取り組み. 言語処理学会第24回年次大会 発表論文集, pp.572-575, March 2018.</p>
            <p>三澤 賢佑, 成田和弥, 田内真惟人, 中島正成, 黒橋禎夫. 定量調査のための意見調査コーパス構築への取り組み. 言語処理学会第23回年次大会 発表論文集, pp.1014-1017, March 2017.</p>
            <p>三澤賢祐, 田内真惟人, Mathieu Domoulin, 中島正成, 水本智也. ネガティブ評判情報に特化したコーパスの構築と分析. 言語処理学会第22回年次大会 発表論文集, pp.501-504, March 2016.</p>
            <p>三澤賢祐, 田内真惟人, Mathieu Domoulin, 中島正成, 水本智也. 意見投稿プラットフォームにおける意見クラスタリングの試み. 言語処理学会第22回年次大会 発表論文集, pp.1037-1040, March 2016.</p>

            <p class="text-h6 text-center font-italic">Research Activities</p>
            <v-expansion-panels flat="true">
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <p class="text-center">
                    <v-icon>far fa-hand-point-right</v-icon>&nbsp;Mentorings of stundents from computational linguistics field
                  </p>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <p>
                    Supervising 7 master students for internship programs.
                    Some of students are non-Japan, and the communication language was sometimes English.
                    The outcomes went into publications.
                  </p>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
            <v-expansion-panels flat="true">
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <p class="text-center">
                    <v-icon>far fa-hand-point-right</v-icon>&nbsp;Administrator of servers for system
                  </p>
                </v-expansion-panel-header>
                <p></p>
                <v-expansion-panel-content>
                  <p>
                    Setting up Linux servers for machine learnings environments (A Spark Cluster composed by 3 machines).
                    Managing the cluster and machines as the administrator and maintainance.
                  </p>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>

            <p class="text-h6 font-italic">Keywords</p>
            <p>
              NLP, Information extraction, Document classification, Clustering, Dependency parsing,
              sentiment analysis, LSTM, CNN, Django, Flask, Docker, AWS
            </p>
          </v-card>
          </v-expansion-panel-content>
          </v-expansion-panel>
          </v-expansion-panels>
          </div>
          <!-- ================================ -->
          <div>
          <v-expansion-panels flat=true>
        <v-expansion-panel>
        <v-expansion-panel-header>
            <p
              class="text-h6 text-center"
            ><v-icon>far fa-hand-point-right</v-icon>
            User behavior analysis on vide games in mobile devices (2014)</p>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-card color="white" max-width="1500" elevation="0">
            <p class="text-h6 font-italic">Drecom Inc., Tokyo Japan</p>
            <p class="text">April 2014 - 2015</p>
            <p>
              To provide games with good quality, it's necessary to understand users' behavior.
              Social game providers are recording a huge number of data of users' behavior such as a timestamp of login,
              transition from one action into another action, or XY axis data of touching the screen during a game.
              These kinds of data tend to be massive, thus it's impossible to manage by commonly used software such as Excel.
              Especially, I worked for these projects such as
            </p>

            <p>Construction of auto-reporting system to monitor users behavior</p>
            <p>Factor analysis to let user to keep playing a video game for long-term</p>
            <p>Construction of internal-tool to monitor competitors' bidding in online advertisement</p>

            <p class="font-italic">Keyword: MySQL, Hadoop, R(on Rstudio)</p>
          </v-card>
          </v-expansion-panel-content>
          </v-expansion-panel>
          </v-expansion-panels>
        </div>
        <!-- ================================ -->
        <!-- <div id="master-project">
        <v-expansion-panels flat=true>
        <v-expansion-panel>
        <v-expansion-panel-header>
        <p class="text-center text-decoration-underline"><v-icon>far fa-hand-point-right</v-icon>&nbsp;Document classification on folklore text</p>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-card color="white" max-width="1500" elevation="0">
            <p class="text font-italic">Master thesis in Nara Institute of Science and Technology</p>
            <p class="text">March 2014</p>
            <p>
              An analysis of narratives has been conducted in folklore fields.
              It enables us to discover customs or manner when narratives are told among populaces.
              'Thompson Motif Labeling'(TMI) is generally used as labels to analyze narratives.
              TMI enables us to express narratives in taxonomy way, therefore we are able to analyze them efficiently.
              For this reason, TMI is generally used, however, it is rare to construct new labeled narrative corpus because the manually labelling is time-consuming work.
              To solve this issue, some label inferring methods with supervised learning were proposed.
              Meanwhile, these methods are difficult to apply to existing unlabeled narratives due to language gap.
              Folktales or myths are usually written in a language in which they are told among populaces,
              hence a language gap causes frequently between labeled narrative corpus and unlabeled narrative corpus.
              This study was performed to solve the language gap.
            </p>
            <p
              class="font-italic"
            >Keyword: Folklore, Document classification, Multi-label classification, Natural language processing, Feautre selection</p>
          </v-card>
          </v-expansion-panel-content>
          </v-expansion-panel>
          </v-expansion-panels>
          </div> -->
          <!-- ================================ -->
        <!-- <div id="bachelor-project">
        <v-expansion-panels flat=true>
        <v-expansion-panel>
        <v-expansion-panel-header>
            <p
              class="text-center text-decoration-underline"
            ><v-icon>far fa-hand-point-right</v-icon>&nbsp;Corpus statistics on persian textbook for foreigners</p>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-card color="white" max-width="1500" elevation="0">
            <p class="text font-italic">Bachelor thesis in Osaka University</p>
            <p class="text">March 2012</p>
            <p>
              The main theme of my study is "Linguistics feature of Persian for non-native speakers".
              For leaning a language efficiently, it is necessary to understand the difference of linguistics aspect.
              My study focused on a case when a Japanese native speaker learns Persian.
              To investigate differences between Japanese and Persian from linguistics aspect, I used methods of computational linguistics.
              I constructed syntactic-trees from parallel text between Japanese and Persian, and I compared which elements are added or deleted between 2 languages.
            </p>
          </v-card>
          </v-expansion-panel-content>
          </v-expansion-panel>
          </v-expansion-panels>
        </div> -->
        </v-flex>
      </v-layout>
    </div>
    </v-main>
  </v-app>
</template>

<script>
import HeaderBar from '@/views/HeaderBar';

export default {
  name: 'App',
  components: {
    HeaderBar,
  },
};
</script>


<style>

/* For PC */
.text {
  font-size: 20px;
}

/* For mobile: */
@media only screen and (max-width: 600px) {
  .text {
    font-size: 16px;
  }
}

</style>
