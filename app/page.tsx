"use client"

import Image from 'next/image'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { QuestionCard } from "@/components/question-card"
import { ResultsBadge } from "@/components/results-badge"
import type { Question, ExamState } from "@/types/exam"

const questions: Question[] = [
  {
    id: 1,
    text: "Most common cause of hypothyroidism?",
    options: ["Iodine deficiency", "Hashimoto thyroiditis", "After thyroidectomy", "Congenital hypothyroidism"],
    correctAnswer: 1
  },
  {
    id: 2,
    text: "Most common causative organism for infective endocarditis overall?",
    options: ["Streptococcus viridans", "Staphylococcus aureus", "Enterococcus", "HACEK organisms"],
    correctAnswer: 1
  },
  {
    id: 3,
    text: "Most common cause of native valve endocarditis?",
    options: ["Streptococcus viridans", "Staphylococcus aureus", "Enterococcus", "HACEK organisms"],
    correctAnswer: 0
  },
  {
    id: 4,
    text: "Most common causes of infective endocarditis in parenteral drug use?",
    options: ["Staphylococcus aureus", "Streptococcus viridans", "Enterococcus", "HACEK organisms"],
    correctAnswer: 0
  },
  {
    id: 5,
    text: "String sign is seen in which disease?",
    options: ["Crohn's disease", "Ulcerative colitis", "Celiac disease", "Irritable bowel syndrome"],
    correctAnswer: 0
  },
  {
    id: 6,
    text: "Homan's sign is seen in which disease?",
    options: ["Deep Vein Thrombosis (DVT)", "Pulmonary Embolism", "Peripheral Arterial Disease", "Chronic Venous Insufficiency"],
    correctAnswer: 0
  },
  {
    id: 7,
    text: "Most common organism in community acquired pneumonia?",
    options: ["Streptococcus pneumoniae", "Haemophilus influenzae", "Mycoplasma pneumoniae", "Klebsiella pneumoniae"],
    correctAnswer: 0
  },
  {
    id: 8,
    text: "Most common cause of acute bronchitis?",
    options: ["Viral infection", "Bacterial infection", "Environmental irritants", "Allergies"],
    correctAnswer: 0
  },
  {
    id: 9,
    text: "Most common side effect of thiazides?",
    options: ["Hypokalemia", "Hyperkalemia", "Hyperglycemia", "Hyperuricemia"],
    correctAnswer: 0
  },
  {
    id: 10,
    text: "Most common cause of community-acquired pneumonia in children?",
    options: ["Streptococcus pneumoniae", "Mycoplasma pneumoniae", "Respiratory syncytial virus", "Haemophilus influenzae"],
    correctAnswer: 0
  },
  {
    id: 11,
    text: "Most common cause of new onset atrial fibrillation?",
    options: ["Hypertension", "Hyperthyroidism", "Coronary artery disease", "Valvular heart disease"],
    correctAnswer: 0
  },
  {
    id: 12,
    text: "Most common cause of secondary hypertension?",
    options: ["Renal artery stenosis", "Primary aldosteronism", "Pheochromocytoma", "Cushing syndrome"],
    correctAnswer: 0
  },
  {
    id: 13,
    text: "Most common cause of hypercalcemia in hospitalized patients?",
    options: ["Malignancy", "Primary hyperparathyroidism", "Vitamin D toxicity", "Sarcoidosis"],
    correctAnswer: 0
  },
  {
    id: 14,
    text: "Most common cause of hypercalcemia in outpatient setting?",
    options: ["Primary hyperparathyroidism", "Malignancy", "Vitamin D toxicity", "Sarcoidosis"],
    correctAnswer: 0
  },
  {
    id: 15,
    text: "Most common cause of left ventricular hypertrophy?",
    options: ["Hypertension", "Aortic stenosis", "Hypertrophic cardiomyopathy", "Athletic heart"],
    correctAnswer: 0
  },
  {
    id: 16,
    text: "What is the characteristic feature of diabetic nephropathy?",
    options: ["Proteinuria", "Hematuria", "Glycosuria", "Ketonuria"],
    correctAnswer: 0
  },
  {
    id: 17,
    text: "Most common cause of peptic ulcers?",
    options: ["H. pylori infection", "NSAIDs", "Stress", "Alcohol"],
    correctAnswer: 0
  },
  {
    id: 18,
    text: "Most common complication of chronic kidney disease?",
    options: ["Hypocalcemia", "Hyperkalemia", "Metabolic acidosis", "Anemia"],
    correctAnswer: 0
  },
  {
    id: 19,
    text: "Most common cause of meningitis in adults?",
    options: ["Streptococcus pneumoniae", "Neisseria meningitidis", "Haemophilus influenzae", "Listeria monocytogenes"],
    correctAnswer: 0
  },
  {
    id: 20,
    text: "Best drug for hypertension in pregnancy?",
    options: ["Methyldopa", "ACE inhibitors", "Angiotensin receptor blockers", "Beta blockers"],
    correctAnswer: 0
  },
  {
    id: 21,
    text: "First-line treatment of hypertension in pregnancy?",
    options: ["Methyldopa", "Labetalol", "Nifedipine", "Hydralazine"],
    correctAnswer: 0
  },
  {
    id: 22,
    text: "Most common cause of cough in non-smokers?",
    options: ["Post-nasal drip", "Asthma", "GERD", "ACE inhibitors"],
    correctAnswer: 0
  },
  {
    id: 23,
    text: "Most common cause of upper respiratory obstruction in adults?",
    options: ["Epiglottitis", "Laryngeal tumor", "Foreign body aspiration", "Vocal cord paralysis"],
    correctAnswer: 0
  },
  {
    id: 24,
    text: "Initial treatment of DKA?",
    options: ["IV fluids", "Insulin", "Potassium replacement", "Bicarbonate therapy"],
    correctAnswer: 0
  },
  {
    id: 25,
    text: "Initial treatment of acute Crohn's disease?",
    options: ["Corticosteroids", "5-ASA compounds", "Biologics", "Immunomodulators"],
    correctAnswer: 0
  },
  {
    id: 26,
    text: "Treatment of choice in hyperthyroidism?",
    options: ["Methimazole", "Propylthiouracil", "Radioactive iodine", "Beta blockers"],
    correctAnswer: 0
  },
  {
    id: 27,
    text: "Most common cause of exacerbation of COPD?",
    options: ["Pneumonia", "Pulmonary embolism", "Heart failure", "Respiratory syncytial virus"],
    correctAnswer: 0
  },
  {
    id: 28,
    text: "First-line management of exacerbated asthma?",
    options: ["Short-acting beta agonists (SABA)", "Inhaled corticosteroids", "Systemic corticosteroids", "Anticholinergics"],
    correctAnswer: 0
  },
  {
    id: 29,
    text: "Diagnosis of obstructive sleep apnea is by:",
    options: ["Sleep study", "Spirometry", "Pulse oximetry", "Chest X-ray"],
    correctAnswer: 0
  },
  {
    id: 30,
    text: "What is the most common cause of Iron Deficiency Anemia in adults?",
    options: ["Chronic blood loss", "Malnutrition", "Malabsorption", "Hemolysis"],
    correctAnswer: 0
  },
  {
    id: 31,
    text: "Drug of choice for generalized tonic-clonic convulsions:",
    options: ["Valproic acid", "Carbamazepine", "Lamotrigine", "Phenytoin"],
    correctAnswer: 0
  },
  {
    id: 32,
    text: "Earliest symptom of Parkinson's disease?",
    options: ["Asymmetric resting tremor", "Bradykinesia", "Postural instability", "Rigidity"],
    correctAnswer: 0
  },
  {
    id: 33,
    text: "Classic sign in Parkinson's disease?",
    options: ["Tremor at rest", "Wide gait", "Intention tremor", "Postural tremor"],
    correctAnswer: 0
  },
  {
    id: 34,
    text: "Treatment of essential tremor?",
    options: ["Beta blockers", "Levodopa", "Anticholinergics", "Dopamine agonists"],
    correctAnswer: 0
  },
  {
    id: 35,
    text: "Most common electrolyte disturbance in CRF?",
    options: ["Hyperkalemia", "Hyponatremia", "Hypocalcemia", "Hyperphosphatemia"],
    correctAnswer: 0
  },
  {
    id: 36,
    text: "Most common cause of acute liver failure?",
    options: ["Acetaminophen toxicity", "Viral hepatitis", "Autoimmune hepatitis", "Alcoholic hepatitis"],
    correctAnswer: 0
  },
  {
    id: 37,
    text: "Treatment of ischemic stroke in first 4 hours?",
    options: ["tPA (tissue plasminogen activator)", "Aspirin", "Heparin", "Clopidogrel"],
    correctAnswer: 0
  },
  {
    id: 38,
    text: "What is the most sensitive test for SLE?",
    options: ["Double-strand DNA", "ANA", "ESR", "Complement levels"],
    correctAnswer: 0
  },
  {
    id: 39,
    text: "Symptoms of weight loss, sweating, positive PPD test is most likely?",
    options: ["Tuberculosis", "Sarcoidosis", "Histoplasmosis", "Pneumonia"],
    correctAnswer: 0
  },
  {
    id: 40,
    text: "Preferred imaging in acute appendicitis in adult male?",
    options: ["CT scan", "Ultrasound", "MRI", "X-ray"],
    correctAnswer: 0
  },
  {
    id: 41,
    text: "What is the best diagnostic test for celiac disease?",
    options: ["Anti-tissue transglutaminase antibodies (tTG)", "Endoscopy with biopsy", "Anti-gliadin antibodies", "HLA typing"],
    correctAnswer: 0
  },
  {
    id: 42,
    text: "Cauliflower ear is found in?",
    options: ["Auricular hematoma", "External otitis", "Tympanic membrane perforation", "Otosclerosis"],
    correctAnswer: 0
  },
  {
    id: 43,
    text: "What is the treatment of chronic stable angina?",
    options: ["Beta blocker", "Aspirin", "Nitrate", "CCB"],
    correctAnswer: 0
  },
  {
    id: 44,
    text: "What is the most common organism causing lower UTI in females?",
    options: ["E. coli", "Staphylococcus", "Klebsiella", "Proteus"],
    correctAnswer: 0
  },
  {
    id: 45,
    text: "First-line treatment of UTI?",
    options: ["Nitrofurantoin", "Ciprofloxacin", "Amoxicillin", "Trimethoprim-sulfamethoxazole"],
    correctAnswer: 0
  },
  {
    id: 46,
    text: "Treatment of rhinosinusitis?",
    options: ["Amoxicillin-clavulanic acid", "Azithromycin", "Ceftriaxone", "Ciprofloxacin"],
    correctAnswer: 0
  },
  {
    id: 47,
    text: "What is the complication of untreated hypothyroidism?",
    options: ["Myxedema coma", "Thyroid storm", "Graves disease", "Thyroiditis"],
    correctAnswer: 0
  },
  {
    id: 48,
    text: "The most common cause of primary hyperaldosteronism?",
    options: ["Adrenal adenomas", "Bilateral adrenal hyperplasia", "Pituitary causes", "Adrenal carcinoma"],
    correctAnswer: 0
  },
  {
    id: 49,
    text: "What is the treatment of chronic migraine?",
    options: ["Beta blocker", "Triptan", "NSAIDs", "Antiemetics"],
    correctAnswer: 0
  },
  {
    id: 50,
    text: "Which of the following is not a risk factor for DVT?",
    options: ["Anticoagulant therapy", "Immobilization", "Surgery", "Cancer"],
    correctAnswer: 0
  },
  {
    id: 51,
    text: "What is the cause of wide mediastinum in chest X-ray?",
    options: ["Aortic dissection", "Pneumothorax", "Congestive heart failure", "Pulmonary embolism"],
    correctAnswer: 0
  },
  {
    id: 52,
    text: "Most common cause of death in diabetic patients?",
    options: ["Cardiovascular disease", "Diabetic nephropathy", "Diabetic ketoacidosis", "Hypoglycemia"],
    correctAnswer: 0
  },
  {
    id: 53,
    text: "Treatment for anaphylactic shock?",
    options: ["Epinephrine", "Antihistamines", "Corticosteroids", "Beta-agonists"],
    correctAnswer: 0
  },
  {
    id: 54,
    text: "Most common cause of metabolic alkalosis?",
    options: ["Vomiting", "Diuretic use", "Nasogastric suction", "Hypokalemia"],
    correctAnswer: 0
  },
  {
    id: 55,
    text: "What is the classic sign of tension pneumothorax?",
    options: ["Shifting of trachea to opposite side", "Hyperresonance on percussion", "Bilateral chest expansion", "Chest crackles"],
    correctAnswer: 0
  },
  {
    id: 56,
    text: "Best diagnostic test for pulmonary embolism?",
    options: ["CT pulmonary angiogram", "Chest X-ray", "D-dimer", "V/Q scan"],
    correctAnswer: 0
  },
  {
    id: 57,
    text: "Most common cause of acute diarrhea?",
    options: ["Viral gastroenteritis", "Bacterial infection", "Food intolerance", "Parasitic infection"],
    correctAnswer: 0
  },
  {
    id: 58,
    text: "Common causes of new onset atrial fibrillation include:",
    options: ["Hypertension", "Coronary artery disease", "Valvular heart disease", "All of the above"],
    correctAnswer: 0
  },
  {
    id: 59,
    text: "Most common cause of new onset atrial fibrillation?",
    options: ["Hyperthyroidism", "Valvular arterial disease", "Coronary artery disease", "Hypertension"],
    correctAnswer: 0
  },
  {
    id: 60,
    text: "Signs of severe hypoxia?",
    options: ["Cyanosis", "Tachypnea", "Bradypnea", "Euphoria"],
    correctAnswer: 0
  },
  {
    id: 61,
    text: "Most common site of colorectal cancer metastasis?",
    options: ["Liver", "Brain", "Lung", "Adrenal"],
    correctAnswer: 0
  },
  {
    id: 62,
    text: "Most common site of lung cancer metastasis?",
    options: ["Bone", "Brain", "Liver", "Adrenal glands"],
    correctAnswer: 0
  },
  {
    id: 63,
    text: "Treatment of hypertension with heart failure with reduced EF?",
    options: ["ACE inhibitors", "Diuretics", "Beta blockers", "Calcium channel blockers"],
    correctAnswer: 0
  },
  {
    id: 64,
    text: "Symptoms of hyperventilation syndrome?",
    options: ["Tachypnea", "Bradypnea", "Coma", "Respiratory acidosis"],
    correctAnswer: 0
  },
  {
    id: 65,
    text: "Most common type of stroke?",
    options: ["Ischemic", "Hemorrhagic", "Lacunar", "Embolic"],
    correctAnswer: 0
  },
  {
    id: 66,
    text: "Risk factors for colorectal cancer?",
    options: ["Smoking", "Hyperlipidemia", "High-fat diet", "Obesity"],
    correctAnswer: 0
  },
  {
    id: 67,
    text: "Treatment of acute angle-closure glaucoma?",
    options: ["Mannitol", "Beta blockers", "NSAIDs", "Prostaglandin analogs"],
    correctAnswer: 0
  },
  {
    id: 68,
    text: "Which is characteristic of nephrotic syndrome?",
    options: ["Proteinuria >3.5g/day", "Hypertension", "Hematuria", "Azotemia"],
    correctAnswer: 0
  },
  {
    id: 69,
    text: "Signs and symptoms of Horner's syndrome?",
    options: ["Ptosis, miosis, and anhidrosis", "Mydriasis and ptosis", "Miosis and mydriasis", "Ptosis and hyperhidrosis"],
    correctAnswer: 0
  },
  {
    id: 70,
    text: "Pellagra is due to which vitamin deficiency?",
    options: ["B3", "B1", "B6", "B12"],
    correctAnswer: 0
  },
  {
    id: 71,
    text: "Wernicke's encephalopathy is due to which vitamin deficiency?",
    options: ["B1 (Thiamine)", "B2 (Riboflavin)", "B3 (Niacin)", "B12 (Cobalamin)"],
    correctAnswer: 0
  },
  {
    id: 72,
    text: "Drug of choice for Lyme disease?",
    options: ["Doxycycline", "Azithromycin", "Ceftriaxone", "Amoxicillin"],
    correctAnswer: 0
  },
  {
    id: 73,
    text: "Drug of choice for syphilis?",
    options: ["Penicillin G", "Doxycycline", "Ceftriaxone", "Azithromycin"],
    correctAnswer: 0
  },
  {
    id: 74,
    text: "Most common cause of upper GI bleeding?",
    options: ["Peptic ulcer", "Esophageal varices", "Mallory-Weiss tear", "Gastric cancer"],
    correctAnswer: 0
  },
  {
    id: 75,
    text: "Most common complication of peptic ulcer?",
    options: ["Bleeding", "Perforation", "Obstruction", "Malignant transformation"],
    correctAnswer: 0
  },
  {
    id: 76,
    text: "Most common cause of chronic cough?",
    options: ["Post-nasal drip", "GERD", "Asthma", "ACE inhibitors"],
    correctAnswer: 0
  },
  {
    id: 77,
    text: "Most common cause of acute angle-closure glaucoma?",
    options: ["Mannitol", "Beta blockers", "NSAIDs", "Prostaglandin analogs"],
    correctAnswer: 0
  },
  {
    id: 78,
    text: "Side effects of ACE inhibitors?",
    options: ["Hyperkalemia and angioedema", "Hypernatremia", "Hypokalemia", "Hypercalcemia"],
    correctAnswer: 0
  },
  {
    id: 79,
    text: "In chest X-ray, boot-shaped heart is seen in?",
    options: ["Tetralogy of Fallot", "Transposition of great arteries", "Atrial septal defect", "Ventricular septal defect"],
    correctAnswer: 0
  },
  {
    id: 80,
    text: "Treatment of bacterial meningitis?",
    options: ["Antibiotics and steroids", "Antifungal drugs", "Antiviral drugs", "Supportive care only"],
    correctAnswer: 0
  },
  {
    id: 81,
    text: "Butterfly rash is seen in?",
    options: ["Systemic Lupus Erythematosus (SLE)", "Rosacea", "Seborrheic dermatitis", "Contact dermatitis"],
    correctAnswer: 0
  },
  {
    id: 82,
    text: "Palpable purpura is seen in?",
    options: ["Vasculitis", "Thrombocytopenia", "Hemophilia", "Von Willebrand disease"],
    correctAnswer: 0
  },
  {
    id: 83,
    text: "Treatment of acute gout?",
    options: ["Colchicine", "Prednisolone", "Allopurinol", "Febuxostat"],
    correctAnswer: 0
  },
  {
    id: 84,
    text: "Most common cause of syncope?",
    options: ["Vasovagal syncope", "Cardiac arrhythmias", "Orthostatic hypotension", "Neurological causes"],
    correctAnswer: 0
  },
  {
    id: 85,
    text: "Most common causative organism of lower respiratory tract infection?",
    options: ["Streptococcus pneumoniae", "Haemophilus influenzae", "Moraxella catarrhalis", "Klebsiella pneumoniae"],
    correctAnswer: 0
  },
  {
    id: 86,
    text: "Classical triad of pheochromocytoma?",
    options: ["Headache, sweating, palpitations", "Fever, weight loss, night sweats", "Polyuria, polydipsia, polyphagia", "Fatigue, weight gain, cold intolerance"],
    correctAnswer: 0
  },
  {
    id: 87,
    text: "Most common cause of acute pancreatitis?",
    options: ["Gallstones", "Alcohol", "Hyperlipidemia", "Medications"],
    correctAnswer: 0
  },
  {
    id: 88,
    text: "Most common cause of acute pericarditis?",
    options: ["Viral infection", "Bacterial infection", "Autoimmune disease", "Post-MI syndrome"],
    correctAnswer: 0
  },
  {
    id: 89,
    text: "Most common cause of acute kidney injury in hospitalized patients?",
    options: ["Pre-renal causes (hypovolemia and shock)", "Post-renal causes (obstruction)", "Acute tubular necrosis", "Acute interstitial nephritis"],
    correctAnswer: 0
  },
  {
    id: 90,
    text: "What is the cause of Trousseau's sign and Chvostek's signs?",
    options: ["Hypocalcemia", "Hypercalcemia", "Hyponatremia", "Hypermagnesemia"],
    correctAnswer: 0
  },
  {
    id: 91,
    text: "What is the result of ruptured berry aneurysm?",
    options: ["Subarachnoid hemorrhage", "Intracranial hemorrhage", "Ischemic stroke", "Cerebral thrombosis"],
    correctAnswer: 0
  },
  {
    id: 92,
    text: "What is the first-line treatment for H. pylori?",
    options: ["PPI, amoxicillin plus clarithromycin", "PPI alone", "Amoxicillin alone", "Clarithromycin alone"],
    correctAnswer: 0
  },
  {
    id: 93,
    text: "Most common cause of hypoglycemia in Type 1 DM?",
    options: ["Overdose of insulin", "Diabetic nephropathy", "Insufficient food intake", "Exercise"],
    correctAnswer: 0
  },
  {
    id: 94,
    text: "Cause of acromegaly?",
    options: ["Growth hormone excess", "Thyroid hormone deficiency", "Cortisol excess", "Insulin resistance"],
    correctAnswer: 0
  },
  {
    id: 95,
    text: "Most specific enzyme in myocardial infarction (MI)?",
    options: ["Troponin", "Creatine kinase (CK)", "Lactate dehydrogenase (LDH)", "Aspartate aminotransferase (AST)"],
    correctAnswer: 0
  },
  {
    id: 96,
    text: "Sign of hyperthyroidism?",
    options: ["Exophthalmos", "Bradycardia", "Weight gain", "Constipation"],
    correctAnswer: 0
  }
];

export default function ExamPage() {
  const [examState, setExamState] = useState<ExamState>({
    answers: {},
    isComplete: false,
    score: undefined
  })

  const handleAnswer = (questionId: number, answer: number) => {
    setExamState(prev => ({
      ...prev,
      answers: {
        ...prev.answers,
        [questionId]: answer
      }
    }))
  }

  const handleSubmit = () => {
    const score = questions.reduce((acc, question) => {
      return acc + (examState.answers[question.id] === question.correctAnswer ? 1 : 0)
    }, 0)

    setExamState(prev => ({
      ...prev,
      isComplete: true,
      score
    }))
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container max-w-4xl mx-auto py-8 px-4">
        <div className="mb-8 bg-white rounded-lg shadow-md p-6">
          <div className="relative w-full h-64 mb-6">
            <Image
              src="https://scontent.fmct2-3.fna.fbcdn.net/v/t39.30808-6/456587603_122102295812480937_969751970588155955_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=LqP2Mf7u7hkQ7kNvgHuvVP0&_nc_zt=23&_nc_ht=scontent.fmct2-3.fna&_nc_gid=AM6pCZki1MU805Z5dm_TIg8&oh=00_AYB33b7XTCWRtUpeziYwkbiSiNkJWib_zzByFmjnPzZqRQ&oe=677F0A67"
              alt="Supreme Medical Council Logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <h2 className="text-2xl font-bold text-center mt-6 mb-2 text-gray-800">
            امتحان التقييم والكفاءة الثاني - طب بشري - ديسمبر ٢٠٢٤
          </h2>
          <p className="text-sm text-center bg-yellow-100 text-yellow-800 font-semibold p-3 rounded-lg mt-4">
            ملاحظة: الاجابات الظاهرة على الاسئلة ليست بالضرورة ان تكون هي الصحيحة والمعتمدة من المجلس.
            الاسئلة عبارة عن تجميع ومجهود الطلاب
          </p>
        </div>

        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Yemen Medical License Exam
        </h1>

        {examState.isComplete && examState.score !== undefined ? (
          <ResultsBadge score={examState.score} total={questions.length} />
        ) : (
          <div>
            {questions.map((question) => (
              <QuestionCard
                key={question.id}
                {...question}
                onAnswer={handleAnswer}
              />
            ))}
            <div className="mt-6 flex justify-center">
              <Button 
                onClick={handleSubmit}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg"
              >
                Submit Exam
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

