<template>
  <v-app>
    <vue-headful title="Projects-experiences" description=" " />
    <HeaderBar></HeaderBar>
    <v-main>
      <v-layout justify-center px-3 py-3 row wrap>
        <v-flex text-center lg4 sm12 xs12>
          <p class="text-h4 hidden-md-and-up">Projects</p>

          <v-card color="white" elevation="0">
            <p class="text-h5 text-decoration-underline">News distribution system</p>
            <p class="text-h6 font-italic">nondisclosure</p>
            <p>The project team would like to send news text automatically depending on the preference of their readers.
              In other words, the automation of news distributions.
              For these requirements, I constructed the news distribution system on AWS, as well as,
              an admin web-application for the distribution system.
              The system chooses preferred news content for each reader, which is realized by machine-learning techniques. The system works on AWS with a serverless style.</p>
            <p class="text-h6 font-italic">Keywords</p>
            <p>AWS-SNS, Flask / AWS-Lambda for web-appliaction, AWS-ECS, scikit-learn</p>
          </v-card>

          <v-card color="white" max-width="1500" elevation="0">
            <p class="text-h5 text-decoration-underline">Keyword extraction system</p>

            <p class="text-h6 font-italic">nondisclosure</p>

            <p>
              The project team would like to know topics in society.
              They could utilize the topics for their analysis-works.
              To meet the requirements, I constructed a news collection system from a major news source.
              As well as, news collection system, I constructed also a keyword extraction system with the named-entity-extraction approach.
              Finally, the extracted named-entities are rendered with visualization.
              The system works on AWS with a serverless style.
            </p>
            <p>The system works on AWS with serverless style.</p>

            <p class="text-h6 font-italic">Keywords</p>
            <p>NLP&nbsp;(for German), web-scraping, named-entity-extraction&nbsp;(Spacy), visualization, AWS-ECS</p>
          </v-card>

          <v-card color="white" max-width="1500" elevation="0">
            <p class="text-h5 text-decoration-underline">Text summarization system</p>

            <p class="text-h6 font-italic">nondisclosure</p>

            <p>
              The project team publishes news texts every day.
              The news text is normally long, therefore, it takes to time to read throughout.
              On the other hand, readers would like to know news content at a glance.
              To resolve the gap between news editors and newsreaders, I introduced a text-summarization system. The system works on AWS with a serverless style.
            </p>

            <p class="text-h6 font-italic">Keywords</p>
            <p>NLP, summarization, AWS-ECS</p>
          </v-card>

          <v-card color="white" max-width="1500" elevation="0">
            <p class="text-h5 text-decoration-underline">Entity extraction from review texts</p>
            <p class="text-h6 font-italic">nondisclosure</p>

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

          <v-card color="white" max-width="1500" elevation="0">
            <p
              class="text-h5 text-decoration-underline"
            >Information Extractons from an opinion platform and software development with NLP technologies</p>
            <p class="text-h6 font-italic">Insight Tech Inc., Tokyo Japan</p>

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

            <p class="text-h6 font-italic">Other projects</p>
            <v-expansion-panels flat="true">
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <p>
                    <v-icon>far fa-hand-point-right</v-icon>&nbsp;Mentorings of stundents from computational linguistics field
                  </p>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <p>
                    I mentored 7 internship students. Some of students are from outside of Japan.
                    Therefore, the communication language was sometimes English.
                    Some of internship works were finally into publications of reseach papers.
                  </p>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
            <v-expansion-panels flat="true">
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <p>
                    <v-icon>far fa-hand-point-right</v-icon>&nbsp;Administrator of servers for system
                  </p>
                </v-expansion-panel-header>
                <p></p>
                <v-expansion-panel-content>
                  <p>
                    I set up Linux servers for machine learnings environments.
                    As well as setting-ups, an administrator and maintainance of servers are also my task.
                    In the end, I was a person in charge to migrate internal servers into AWS.
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

          <v-card color="white" max-width="1500" elevation="0">
            <p
              class="text-h5 text-decoration-underline"
            >User behavior analysis on vide games in mobile devices</p>
            <p class="text-h6 font-italic">Drecom Inc., Tokyo Japan</p>
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

          <v-card color="white" max-width="1500" elevation="0">
            <p class="text-h5 text-decoration-underline">Document classification on folklore text</p>
            <p class="text-h6 font-italic">Master thesis in Nara Institute of Science and Technology</p>
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

          <v-card color="white" max-width="1500" elevation="0">
            <p
              class="text-h5 text-decoration-underline"
            >Corpus statistics on persian textbook for foreigners</p>
            <p class="text-h6 font-italic">Bachelor thesis in Osaka University</p>
            <p>
              The main theme of my study is "Linguistics feature of Persian for non-native speakers".
              For leaning a language efficiently, it is necessary to understand the difference of linguistics aspect.
              My study focused on a case when a Japanese native speaker learns Persian.
              To investigate differences between Japanese and Persian from linguistics aspect, I used methods of computational linguistics.
              I constructed syntactic-trees from parallel text between Japanese and Persian, and I compared which elements are added or deleted between 2 languages.
            </p>
          </v-card>
        </v-flex>
      </v-layout>
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
