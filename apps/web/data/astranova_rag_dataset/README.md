# AstraNova Systems — Synthetic RAG Dataset

This is a fictional, internally consistent starter knowledge base for testing a Retrieval-Augmented Generation (RAG) pipeline. All people, projects, company details, technical values and events are invented.

## Contents
- `documents/`: 40 Markdown source documents.
- `evaluation/evaluation_questions.jsonl`: 50 questions with reference answers, relevant document IDs, categories and expected behaviour.
- `evaluation/evaluation_questions.csv`: spreadsheet-friendly version of the same evaluation set.
- `document_manifest.json`: list of source documents.

## Suggested first experiment
1. Ingest only `documents/` into your RAG pipeline.
2. Keep `evaluation/` outside the ingestion directory.
3. Run all 50 evaluation questions against your application.
4. Compare generated answers with `reference_answer`.
5. For `expected_behaviour=abstain`, check that the model says the information is unavailable rather than guessing.
6. Inspect retrieval separately: compare retrieved document IDs with `relevant_document_ids`.

## Important evaluation note
The reference answers are starter ground truth, not a substitute for human review. Review them before using the set for formal benchmarking. The dataset deliberately contains a few historical values and superseded documents; use document status and revision rules to test conflict resolution.

## Recommended ingestion metadata
Use the filename stem as `document_id`. Suggested metadata:
- `document_type`: infer from the document header
- `organisation`: AstraNova Systems
- `classification`: Internal training dataset
- `status`: Approved for RAG testing

## Dataset design
The knowledge base includes:
- single-document retrieval
- multi-document retrieval
- comparisons
- arithmetic and policy reasoning
- revision and temporal conflict resolution
- incident status tracking
- unanswerable questions and abstention
