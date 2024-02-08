<template>
  <v-app>
    <vue-headful title="Publications of Kensuke Mitsuzawa" description=" " />
    <HeaderBar></HeaderBar>
    <v-main>
      <div class="mx-8">
      <v-layout justify-center align-center px-3 py-3 row wrap>
        <v-flex text-center lg4 sm12 xs12>
          <p class="text-h4 hidden-md-and-up">Publications</p>
          <div id="international">
            <v-card color="white" max-width="1500" elevation="0">
              <v-row align="center" justify="center">
                <v-col cols="auto">
                  <p class="text font-italic">
                    Variable Selection in Maximum Mean Discrepancy for Interpretable Distribution Comparison
                  </p>
                  <p>
                  <u>Kensuke Mitsuzawa</u>, Motonobu Kanagawa, Stefano Bortoli, Margherita Grossi, Paolo Papotti
                  </p>
                  <p>
                    <a href="https://arxiv.org/abs/2311.01537">arxiv</a>
                  </p>
                </v-col>
              </v-row>
            </v-card>
          <!-- =================================== -->
            <v-card color="white" max-width="1500" elevation="0">
              <v-row align="center" justify="center">
                <v-col cols="auto">
                  <p class="text text--primary">
                    <a
                      href="https://noisy-text.github.io/2020/pdf/2020.d200-1.10.pdf"
                    >Sentence Boundary Detection on Line Breaks in Japanese.</a>
                  </p>
                  <p>
                    Yuta Hayashibe and <u>Kensuke Mitsuzawa</u>
                  </p>
                  <p>Proceedings of the 6th Workshop on Noisy User-generated Text. November 2020. (W-NUT 2020)</p>
                </v-col>
              </v-row>
            </v-card>
            <!-- =================================== -->
            <v-card color="white" max-width="1500" elevation="0">
              <v-row align="center" justify="center">
                <v-col cols="auto">
                  <p class="text text--primary">
                    <a
                      href="https://dl.acm.org/doi/10.1145/3282373.3282405"
                    >Clause-level Negative-opinion Analysis for Classifying Reviews on Multiple Domains.</a>
                  </p>
                  <p>
                    Kazuhiro Akiyama,
                    <u>Kensuke Mitsuzawa</u>, Kazuya Narita, Tadahiko Kumamoto, Akiyo Nadamoto
                  </p>
                  <p>International Conference on Information Integration and Web-based Applications & Services(iiWAS2018)</p>
                </v-col>
              </v-row>
            </v-card>

            <v-card color="white" max-width="1500" elevation="0">
              <v-row align="center" justify="center">
                <v-col cols="auto">
                  <p class="text text--primary">
                    <a
                      href="http://www.lrec-conf.org/proceedings/lrec2016/workshops/LREC2016Workshop-Novel%20Incentives_Proceedings.pdf#page=16"
                    >FKC Corpus: a Japanese Corpus from New Opinion Survey Service.</a>
                  </p>
                  <p>
                    <u>Kensuke Mitsuzawa</u>, Maito Tauchi, Mathieu Domoulin, Masanori Nakashima and Tomoya Mizumoto
                  </p>
                  <p>In proceedings of the Novel Incentives for Collecting Data and Annotation from People: types, implementation, tasking requirements, workflow and results, 2016</p>
                </v-col>
              </v-row>
            </v-card>

            <v-card color="white" max-width="1500" elevation="0">
              <v-row align="center" justify="center">
                <v-col cols="auto">
                  <p class="text text--primary">
                    <a
                      href="http://www.aclweb.org/anthology/W13-3604.pdf"
                    >NAIST at 2013 CoNLL Shared Task Grammatical Error Correction.</a>
                  </p>
                  <p>
                    Ippei Yoshimoto, Tomoya Kose,
                    <u>Kensuke Mitsuzawa</u>, Keisuke Sakaguchi, Tomoya Mizumoto, Yuta Hayashibe, Mamoru Komachi, Yuji Matsumoto
                  </p>
                  <p>In Proceedings of the Seventeenth Conference on Computational Natural Language Learning: Shared Task, 2013</p>
                </v-col>
              </v-row>
            </v-card>
          </div>

          <div id="jp-only">
            <p class="text-h6">Japanese only</p>
            <v-card color="white" max-width="1500" elevation="0">
              <v-row align="center" justify="center">
                <v-col cols="auto">
                  <p class="text text--primary">CRFを用いた複数ドメインの消費者投稿文におけるネガティブ感情分類</p>
                  <p>
                    秋山 和寛,
                    <u>三澤 賢祐</u>, 成田 和弥，熊本 忠彦，灘本 明代
                  </p>
                  <p>第11回Webとデータベースに関するフォーラム(WebDB Forum 2018)</p>
                </v-col>
              </v-row>
            </v-card>

            <v-card color="white" max-width="1500" elevation="0">
              <v-row align="center" justify="center">
                <v-col cols="auto">
                  <p class="text text--primary">意見分析に適した意見タグ獲得改善への取り組み</p>
                  <p>
                    <u>三澤 賢佑</u>, 成田和弥, 伊藤友博, 柴田知秀, 河原大輔, 黒橋禎夫 (京大/JST)
                  </p>
                  <p>言語処理学会第24回年次大会 発表論文集</p>
                </v-col>
              </v-row>
            </v-card>

            <v-card color="white" max-width="1500" elevation="0">
              <v-row align="center" justify="center">
                <v-col cols="auto">
                  <p class="text text--primary">CRFを用いたレビューにおける節単位毎の感情推定</p>
                  <p>
                    秋山 和寛,
                    <u>三澤 賢祐</u>, 成田 和弥，熊本 忠彦，灘本 明代
                  </p>
                  <p>DEIM2018<a href="http://db-event.jpn.org/deim2018/data/papers/323.pdf"> [URL] </a></p>
                </v-col>
              </v-row>
            </v-card>

            <v-card color="white" max-width="1500" elevation="0">
              <v-row align="center" justify="center">
                <v-col cols="auto">
                  <p class="text text--primary">定量調査のための意見調査コーパス構築への取り組み</p>
                  <p>
                    <u>三澤 賢佑</u>, 成田和弥, 田内真惟人, 中島正成, 黒橋禎夫
                  </p>
                  <p>言語処理学会第23回年次大会 発表論文集, 2017<a href="http://www.anlp.jp/proceedings/annual_meeting/2017/pdf_dir/P18-2.pdf"> [URL] </a></p>
                </v-col>
              </v-row>
            </v-card>

            <v-card color="white" max-width="1500" elevation="0">
              <v-row align="center" justify="center">
                <v-col cols="auto">
                  <p class="text text--primary">社内データに基づくイノベータ人財のピックアップ</p>
                  <p>
                    成田和弥, 田内真惟人, <u>三澤賢祐</u>, 中島正成
                  </p>
                  <p>言語処理学会第23回年次大会 発表論文集, 2017<a href="http://www.anlp.jp/proceedings/annual_meeting/2017/pdf_dir/P12-1.pdf"> [URL] </a></p>
                </v-col>
              </v-row>
            </v-card>

            <v-card color="white" max-width="1500" elevation="0">
              <v-row align="center" justify="center">
                <v-col cols="auto">
                  <p class="text text--primary">ネガティブ評判情報に特化したコーパスの構築と分析</p>
                  <p>
                    <u>三澤賢祐</u>, 田内真惟人, Mathieu Domoulin, 中島正成, 水本智也
                  </p>
                  <p>言語処理学会第22回年次大会 発表論文集, 2016<a href="http://www.anlp.jp/proceedings/annual_meeting/2016/pdf_dir/P12-5.pdf"> [URL] </a></p>
                </v-col>
              </v-row>
            </v-card>

            <v-card color="white" max-width="1500" elevation="0">
              <v-row align="center" justify="center">
                <v-col cols="auto">
                  <p class="text text--primary">意見投稿プラットフォームにおける意見クラスタリングの試み</p>
                  <p>
                    <u>三澤賢祐</u>, 田内真惟人, Mathieu Domoulin, 中島正成, 水本智也
                  </p>
                  <p>言語処理学会第22回年次大会 発表論文集, 2016<a href="http://www.anlp.jp/proceedings/annual_meeting/2016/pdf_dir/P17-9.pdf"> [URL] </a></p>
                </v-col>
              </v-row>
            </v-card>

            <v-card color="white" max-width="1500" elevation="0">
              <v-row align="center" justify="center">
                <v-col cols="auto">
                  <p class="text text--primary">Twitterを利用した日本語感情表現辞書の自動構築</p>
                  <p>
                    池田可奈子（首都大）, <u>三澤賢祐</u>
                  </p>
                  <p>第10回シンポジウム, ポスター発表, 2015</p>
                </v-col>
              </v-row>
            </v-card>

            <v-card color="white" max-width="1500" elevation="0">
              <v-row align="center" justify="center">
                <v-col cols="auto">
                  <p class="text text--primary">異言語資源を利用したモチーフラベルの自動推定</p>
                  <p>
                    <u>三澤賢祐</u>, 松本裕治
                  </p>
                  <p>言語処理学会第20回年次大会発表論文集, 2014<a href="http://www.anlp.jp/proceedings/annual_meeting/2014/pdf_dir/P3-18.pdf"> [URL] </a></p>
                </v-col>
              </v-row>
            </v-card>

            <v-card color="white" max-width="1500" elevation="0">
              <v-row align="center" justify="center">
                <v-col cols="auto">
                  <p class="text text--primary">格構造に注目した日本語-日本語手話の並び替えと述語項構造に注目した語義曖昧性解消</p>
                  <p>
                    <u>三澤賢祐</u>, 酒井啓道, 吉川友也, 水本智也, 松本裕治
                  </p>
                  <p>第27回人工知能学会全国大会論文集, 2013<a href="https://kaigi.org/jsai/webprogram/2013/pdf/721.pdf"> [URL] </a></p>
                </v-col>
              </v-row>
            </v-card>
          </div>
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
