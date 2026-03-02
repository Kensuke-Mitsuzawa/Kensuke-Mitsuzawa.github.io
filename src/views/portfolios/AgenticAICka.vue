<template>
    <v-app>
        <vue-headful title="Kensuke Mitsuzawa | Portfolio Hub" />
        <HeaderBar />
        <v-main>
            <v-container class="py-10">
                <h1 class="text-h3 font-weight-bold mb-6">Unboxing the Black Box: Quantifying Agentic AI Pipeline
                    with CKA</h1>

                <v-card color="blue-grey lighten-5" elevation="0" class="pa-6 mb-10 rounded-lg border-left-blue">
                    <v-row>
                        <v-col cols="12" md="6">
                            <h3 class="text-h5 font-weight-bold blue-grey--text text--darken-3 mb-2">Practical Problem
                            </h3>
                            <p class="mb-0">
                                As Agentic AI transitions to complex, multi-agent orchestrations, the systems inherently
                                become black boxes. Engineers struggle to answer critical questions: <em>Did the
                                    Synthesizer actually use the context retrieved by the Researcher, or did it
                                    hallucinate? Does a specific intermediate agent actually contribute to the final
                                    semantic outcome, or <strong>is it just wasting API tokens and adding
                                        latency?</strong></em>
                                Currently, evaluating this relies on fragile LLM-as-a-judge heuristics or manual log
                                inspection, lacking mathematical rigor.
                            </p>
                        </v-col>
                        <v-col cols="12" md="6">
                            <h3 class="text-h5 font-weight-bold blue-grey--text text--darken-3 mb-2">The Solution</h3>
                            <p class="mb-0">
                                Evaluating LLM Orchestration Objectively using Hilbert-Schmidt Independence Criterion
                                (HSIC).
                                This project utilizes traditional kernel methods, "Centered Kernel Alignment
                                (CKA)".
                                By treating each agent's natural language output as a semantic feature and converting it
                                into a continuous embedding space, we mathematically measure the statistical dependence
                                between agents. This provides a quantitative dependency visualization, allowing
                                engineers to
                                identify "rogue" agents and prove the final output is grounded in retrieved context.
                            </p>
                        </v-col>
                    </v-row>
                </v-card>

                <v-divider class="mb-10"></v-divider>

                <h2 class="text-h4 font-weight-bold mb-6">Setting</h2>
                <v-card outlined class="mb-8 pa-6">
                    <div class="text-body-1">
                        <p class="mb-4"><strong>Domain & Dataset:</strong> Scientific/Academic Question Answering.
                            Evaluation QA pairs from a HuggingFace <a
                                href="https://huggingface.co/datasets/jmhb/PaperSearchQA">jmhb/PaperSearchQA</a>.
                            The agent pipeline generated 79 answers for 79 questions.
                        </p>
                        <p class="mb-4"><strong>Graph of the Agentic AI:</strong></p>
                        <div class="ml-4 mb-4 grey--text text--darken-3">
                            <p class="mb-1">• <strong>Keyword Extractor:</strong> Extracts search terms from the prompt.
                            </p>
                            <p class="mb-1">• <strong>Researcher (ReAct Pattern):</strong> Uses a
                                Thought-Action-Observation loop with <code>ArxivQueryRun</code> to retrieve academic
                                context.</p>
                            <p class="mb-1">• <strong>Noisy/Distractor Agent:</strong> Intentionally injected to return
                                unrelated generic information.</p>
                            <p class="mb-1">• <strong>Judge Agent:</strong> Filters the retrieved context against the
                                prompt.</p>
                            <p class="mb-1">• <strong>Synthesizer Agent:</strong> Formulates the final expert answer.
                            </p>
                        </div>
                        <section id="graphs" class="mb-10 text-center">
                            <v-img src="/portfolio/agentic-ai-cka/agent-graph.png" alt="Agent Architecture Graph"
                                max-width="800" class="mx-auto rounded shadow-sm"></v-img>
                        </section>
                        <!-- <p class="mb-4"><strong>Embedding Models to Use:</strong> <code>all-MiniLM-L6-v2</code> for
                            rapid semantic vectorization.</p> -->
                    </div>


                    <p class="mb-4"><strong>LLMs to Use:</strong> Qwen/Qwen2.5-3B-Instruct served locally.</p>

                </v-card>


                <section id="math" class="mb-10">
                    <h2 class="text-h4 font-weight-bold mb-6">Mathematic Flow</h2>
                    <!-- <h2 class="text-h5 font-weight-bold mb-4 text-blue-darken-3">Mathematic Flow</h2> -->

                    <v-card outlined class="mb-8 pa-6">
                        <p class="mb-4"><strong>
                                The dependency degree between two agents is quantified using the CKA-value.
                            </strong></p>
                        <p class="mb-4">
                            To compute the dependency metric \(CKA_{i, j}\) between Agent \(i\) and Agent \(j\), we
                            evaluate their outcomes over \(N\) queries.
                        </p>
                        <ol class="text-body-1 ml-4 mb-4">
                            <li class="mb-2"><strong>Generate Responses:</strong> Agent \(i\) receives a prompt
                                \(p_{i}^{(n)}\) and generates text \(r_{i}^{(n)} = \text{Agent}_{i}(p_{i}^{(n)})\)</li>
                            <li class="mb-2"><strong>Embed Responses:</strong> Text is converted to dense vector
                                \(h_{i}^{(n)} \in \mathbb{R}^d\). \(h_{i}^{(n)} = f_{\text{embedding}}(r_{i}^{(n)})\)
                            </li>
                            <li class="mb-2"><strong>Construct Feature Matrices:</strong> The matrix \(H_{i} \in
                                \mathbb{R}^{N \times d}\) for Agent \(i\).</li>
                            <li class="mb-2"><strong>Compute HSIC:</strong> Using a linear kernel and centering matrix
                                \(C\):</li>
                        </ol>
                        <v-sheet class="math-sheet-container">
                            $$\text{HSIC}(H_{i}, H_{j}) = \frac{1}{(N-1)^2} \text{tr}(H_{i} H_{i}^T C H_{j} H_{j}^T C)$$
                        </v-sheet>
                        <p class="mb-4">
                            <strong>Compute CKA:</strong> The HSIC score is normalized:
                        </p>
                        <v-sheet class="math-sheet-container">
                            $$CKA_{i, j} = \frac{\text{HSIC}(H_{i}, H_{j})}{\sqrt{\text{HSIC}(H_{i}, H_{i})
                            \text{HSIC}(H_{j}, H_{j})}}$$
                        </v-sheet>

                        <p class="mb-4">
                            The CKA value range is [0.0, 1.0]. A higher value indicates a stronger dependency.
                        </p>
                    </v-card>
                </section>

                <section id="results" class="mb-10">
                    <h2 class="text-h4 font-weight-bold mb-6">Result Analysis</h2>

                    <v-card outlined class="mb-8 pa-6 bg-grey-lighten-5">
                        <h3 class="text-h5 font-weight-bold mb-4">Orchestration Dependency Graph</h3>

                        <v-img src="/portfolio/agentic-ai-cka/cka-analysis-agents.png" alt="CKA Analysis Agents"
                            max-width="800" class="mx-auto rounded shadow-sm mb-6 mt-4"></v-img>


                        <p class="text-body-1">
                            The CKA relations show that the distractor and final outcome are less related
                            (<strong>0.39</strong>) as
                            expected.
                            With this result, we can eliminate the distractor agent from the final outcome.
                        </p>
                        <p class="text-body-1">
                            The distractor agent generates unrelated information. The judge agent
                            (<code>agent_4_judge_distractor</code>) successfully filters the unrelated distractor's
                            outcome, maintaining high CKA dependency paths elsewhere.

                            Meanwhile, the outcome from the
                            <code>agent_2_researcher</code> agent is highly related to the final outcome (0.91).
                        </p>

                        <v-expansion-panels class="mt-6">
                            <v-expansion-panel>
                                <v-expansion-panel-header class="font-weight-bold grey--text text--darken-2">
                                    <v-icon left small>mdi-code-json</v-icon> Example Outcome JSON
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <v-sheet class="grey darken-4 pa-3 rounded font-mono text-caption white--text"
                                        style="overflow-x: auto;">
                                        <pre><code>{
  "prompt": "Which imaging technique employed during pregnancy can identify hydrocephalus confined to one side of the brain?",
  "distractor": "Certainly! Here's a delightful and nutritious fruit salad recipe...",
  "final_answer": "MRI (Magnetic Resonance Imaging) is an imaging technique employed during pregnancy that can identify hydrocephalus confined to one side of the brain. This specialized imaging method allows for accurate detection and visualization of such conditions, making it an essential tool for prenatal care and diagnosis."
}</code></pre>
                                    </v-sheet>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>

                        <h3 class="text-h5 font-weight-bold mt-8 mb-4">Researcher Iteration Dependency Graph</h3>

                        <v-img src="/portfolio/agentic-ai-cka/cka-analysis-researcher-agent.png"
                            alt="CKA Analysis Researcher Agent" max-width="800"
                            class="mx-auto rounded shadow-sm mb-6 mt-4"></v-img>

                        <p class="text-body-1">
                            The CKA value increases from the 1st iteration (0.82) to the 2nd iteration (0.94). This
                            increased CKA value indicates the designed iteration agent pattern effectively discovered
                            the related information to generate the final outcome. The 3rd iteration holds still a high
                            value (0.93), thus we may further continue the iteration if the budget allows.
                        </p>
                    </v-card>
                </section>

                <section id="implementation" class="mt-12 mb-10">
                    <h2 class="text-h4 font-weight-bold mb-6">Implementation Details</h2>
                    <v-card outlined class="mb-8 pa-6">
                        <p class="text-body-1 mb-4">
                            To bypass the I/O bottleneck of mounting and demounting LLMs into GPU memory on the
                            restricted 2-node HPC cluster, the architecture decouples orchestration from inference.
                        </p>
                        <ul class="text-body-1 mb-6">
                            <li><strong>GPU Node (Generation):</strong> vLLM high-throughput inference server.</li>
                            <li><strong>GPU Node (Embedding):</strong> <code>all-MiniLM-L6-v2</code> local endpoint.
                            </li>
                            <li><strong>CPU Orchestrator Node:</strong> Python <code>multiprocessing</code> executing
                                the LangChain DAG.</li>
                        </ul>

                        <v-expansion-panels class="mt-6">
                            <v-expansion-panel>
                                <v-expansion-panel-header class="font-weight-bold grey--text text--darken-2">
                                    <v-icon left small>mdi-language-python</v-icon> Agent Prompts Source Code
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <v-sheet class="grey darken-4 pa-3 rounded font-mono text-caption white--text"
                                        style="overflow-x: auto;">
                                        <pre><code>init_extract_prompt = PromptTemplate.from_template(
    "You are a helpful academic keyword extractor. "
    "Given the user prompt, extract the most important keywords..."
)

query_prompt = PromptTemplate.from_template(
    "Based on these keywords: {keywords}, formulate a single concise search query..."
)

filter_prompt = PromptTemplate.from_template(
    "Read the following raw documents retrieved from Arxiv..."
)

judge_prompt = PromptTemplate.from_template(
    "Evaluate if the current synthesized data contains sufficient detail..."
)

distractor_template = """You are a noisy distractor agent. Ignore the user's prompt completely.
Instead, {pattern}"""

synthesizer_template = """You are an expert Synthesizer Agent. Your task is to provide a final, comprehensive answer..."""
</code></pre>
                                    </v-sheet>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-card>
                </section>

            </v-container>
        </v-main>
    </v-app>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import HeaderBar from '@/views/HeaderBar';

export default {
  name: "AgenticAICka",
  components: {
    HeaderBar,
  },
  data() {
    return {};
  },
  mounted() {
    this.renderMath();
  },
  updated() {
    this.renderMath();
  },
  methods: {
    renderMath() {
      if (window.MathJax && window.MathJax.typesetPromise) {
        window.MathJax.typesetPromise();
      } else if (window.MathJax && window.MathJax.Hub) {
        // eslint-disable-next-line new-cap
        window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub]);
      }
    },
  },
};
</script>

<style scoped>
.border-left-blue {
    border-left: 6px solid #1976D2 !important;
}

.math-sheet-container {
    background-color: #f5f5f5 !important;
    padding: 16px !important;
    border-radius: 4px !important;
    text-align: center !important;
    margin-bottom: 16px !important;
    border: 1px solid #e0e0e0;
}

pre {
    margin: 0;
}
</style>
