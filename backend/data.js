const data = [
    // Existing entries
    {
        symptoms: ["Yellow Eyes", "Fatigue", "Dark Urine"],
        illnesses: ["Jaundice", "Hepatitis", "Cirrhosis"],
        drugs: ["Ursodiol", "Lactulose", "Antiviral Medications"]
    },
    {
        symptoms: ["Loss of Appetite", "Fatigue", "Unexplained Weight Loss"],
        illnesses: ["Anorexia", "Depression", "Chronic Illness"],
        drugs: ["Megestrol Acetate", "Dronabinol", "Mirtazapine"]
    },
    {
        symptoms: ["Nausea", "Abdominal Pain", "Vomiting"],
        illnesses: ["Gastritis", "Food Poisoning", "Motion Sickness"],
        drugs: ["Ondansetron", "Metoclopramide", "Dimenhydrinate"]
    },
    {
        symptoms: ["Chest Pain", "Shortness of Breath", "Dizziness"],
        illnesses: ["Angina", "Myocardial Infarction", "Pneumonia"],
        drugs: ["Nitroglycerin", "Aspirin", "Antibiotics"]
    },
    {
        symptoms: ["Persistent Cough", "Shortness of Breath", "Wheezing"],
        illnesses: ["Chronic Bronchitis", "Asthma", "Tuberculosis"],
        drugs: ["Cough Suppressants", "Bronchodilators", "Antibiotics"]
    },
    {
        symptoms: ["Fatigue", "Weight Gain", "Cold Sensitivity"],
        illnesses: ["Chronic Fatigue Syndrome", "Hypothyroidism", "Anemia"],
        drugs: ["Thyroid Hormones", "Iron Supplements", "Stimulants"]
    },
    {
        symptoms: ["Headache", "Nausea", "Sensitivity to Light"],
        illnesses: ["Migraine", "Tension Headache", "Cluster Headache"],
        drugs: ["Ibuprofen", "Acetaminophen", "Sumatriptan"]
    },
    {
        symptoms: ["Rash", "Itching", "Redness"],
        illnesses: ["Eczema", "Psoriasis", "Contact Dermatitis"],
        drugs: ["Hydrocortisone Cream", "Calamine Lotion", "Antihistamines"]
    },
    {
        symptoms: ["Dizziness", "Vertigo", "Balance Issues"],
        illnesses: ["Vertigo", "Meniere's Disease", "Dehydration"],
        drugs: ["Meclizine", "Betahistine", "Hydration Solutions"]
    },
    {
        symptoms: ["Abdominal Pain", "Diarrhea", "Nausea"],
        illnesses: ["Appendicitis", "Peptic Ulcer", "Irritable Bowel Syndrome"],
        drugs: ["Antacids", "Antibiotics", "Pain Relievers"]
    },
    {
        symptoms: ["Shortness of Breath", "Coughing", "Wheezing"],
        illnesses: ["Asthma", "Chronic Obstructive Pulmonary Disease (COPD)", "Pulmonary Embolism"],
        drugs: ["Inhaled Corticosteroids", "Bronchodilators", "Anticoagulants"]
    },
    {
        symptoms: ["Swelling", "Shortness of Breath", "Fatigue"],
        illnesses: ["Edema", "Heart Failure", "Kidney Disease"],
        drugs: ["Diuretics", "ACE Inhibitors", "Anti-inflammatory Drugs"]
    },
    {
        symptoms: ["Fever", "Chills", "Body Aches"],
        illnesses: ["Influenza", "COVID-19", "Bacterial Infections"],
        drugs: ["Antipyretics", "Antibiotics", "Antiviral Medications"]
    },
    {
        symptoms: ["Back Pain", "Stiffness", "Limited Movement"],
        illnesses: ["Herniated Disc", "Spinal Stenosis", "Muscle Strain"],
        drugs: ["Nonsteroidal Anti-inflammatory Drugs (NSAIDs)", "Muscle Relaxants", "Pain Relievers"]
    },
    {
        symptoms: ["Difficulty Swallowing", "Heartburn", "Regurgitation"],
        illnesses: ["Esophageal Stricture", "Gastroesophageal Reflux Disease (GERD)", "Stroke"],
        drugs: ["Proton Pump Inhibitors", "Swallowing Therapy", "Anti-reflux Medications"]
    },
    {
        symptoms: ["Insomnia", "Daytime Sleepiness", "Restlessness"],
        illnesses: ["Sleep Apnea", "Restless Legs Syndrome", "Chronic Stress"],
        drugs: ["Melatonin", "Benzodiazepines", "Sleep Aids"]
    },
    {
        symptoms: ["Joint Pain", "Swelling", "Stiffness"],
        illnesses: ["Rheumatoid Arthritis", "Osteoarthritis", "Gout"],
        drugs: ["Disease-modifying Antirheumatic Drugs (DMARDs)", "Pain Relievers", "Urate-lowering Therapy"]
    },
    {
        symptoms: ["Hearing Loss", "Tinnitus", "Ear Fullness"],
        illnesses: ["Presbycusis", "Otitis Media", "Meniere's Disease"],
        drugs: ["Hearing Aids", "Steroids", "Antibiotics"]
    },
    {
        symptoms: ["Blurred Vision", "Eye Pain", "Difficulty Seeing at Night"],
        illnesses: ["Cataracts", "Glaucoma", "Diabetic Retinopathy"],
        drugs: ["Eye Drops", "Surgery", "Glaucoma Medications"]
    },
    {
        symptoms: ["Frequent Urination", "Urgency", "Painful Urination"],
        illnesses: ["Diabetes Mellitus", "Urinary Tract Infection (UTI)", "Benign Prostatic Hyperplasia"],
        drugs: ["Diuretics", "Antibiotics", "Alpha Blockers"]
    },
    // New entries
    {
        symptoms: ["Dry Mouth", "Thirst", "Difficulty Swallowing"],
        illnesses: ["Sjogren's Syndrome", "Dehydration", "Medication Side Effect"],
        drugs: ["Saliva Substitutes", "Fluoride Treatments", "Anticholinergic Medications"]
    },
    {
        symptoms: ["Sore Throat", "Cough", "Fever"],
        illnesses: ["Pharyngitis", "Tonsillitis", "Strep Throat"],
        drugs: ["Antibiotics", "Lozenges", "Gargles"]
    },
    {
        symptoms: ["Skin Itching", "Rash", "Redness"],
        illnesses: ["Allergic Reaction", "Dermatitis", "Hives"],
        drugs: ["Antihistamines", "Topical Steroids", "Calamine Lotion"]
    },
    {
        symptoms: ["Muscle Cramps", "Twitching", "Spasms"],
        illnesses: ["Electrolyte Imbalance", "Dehydration", "Exercise-Induced"],
        drugs: ["Electrolyte Supplements", "Muscle Relaxants", "Pain Relievers"]
    },
    {
        symptoms: ["Numbness", "Tingling", "Weakness"],
        illnesses: ["Peripheral Neuropathy", "Stroke", "Multiple Sclerosis"],
        drugs: ["Anticonvulsants", "Pain Relievers", "Steroids"]
    },
    {
        symptoms: ["Tingling Sensation", "Numbness", "Weakness"],
        illnesses: ["Carpal Tunnel Syndrome", "Diabetes", "Vitamin Deficiency"],
        drugs: ["Vitamin B12 Supplements", "Anticonvulsants", "Pain Relievers"]
    },
    {
        symptoms: ["Unexplained Weight Loss", "Fatigue", "Loss of Appetite"],
        illnesses: ["Cancer", "Hyperthyroidism", "Diabetes Mellitus"],
        drugs: ["Appetite Stimulants", "Hormone Therapy", "Anti-cancer Medications"]
    },
    {
        symptoms: ["Bleeding Gums", "Swollen Gums", "Painful Gums"],
        illnesses: ["Gingivitis", "Vitamin C Deficiency", "Blood Disorders"],
        drugs: ["Antiseptic Mouthwashes", "Vitamin C Supplements", "Hemostatic Agents"]
    },
    {
        symptoms: ["Frequent Headaches", "Nausea", "Sensitivity to Light"],
        illnesses: ["Migraines", "Cluster Headaches", "Chronic Tension Headaches"],
        drugs: ["Abortive Migraine Medications", "Preventive Medications", "Pain Relievers"]
    },
    {
        symptoms: ["Cold Hands and Feet", "Numbness", "Pain"],
        illnesses: ["Raynaud's Disease", "Peripheral Artery Disease", "Hypothyroidism"],
        drugs: ["Vasodilators", "Thyroid Hormones", "Antiplatelet Agents"]
    },
    {
        symptoms: ["Anxiety", "Depression", "Insomnia"],
        illnesses: ["Major Depressive Disorder", "Anxiety Disorder", "Post-Traumatic Stress Disorder (PTSD)"],
        drugs: ["Antidepressants", "Anxiolytics", "Sleep Aids"]
    },
    {
        symptoms: ["Mood Swings", "Irritability", "Fatigue"],
        illnesses: ["Bipolar Disorder", "Major Depressive Disorder", "Attention Deficit Hyperactivity Disorder (ADHD)"],
        drugs: ["Mood Stabilizers", "Antidepressants", "Stimulants"]
    },
    {
        symptoms: ["Hallucinations", "Delusions", "Disorganized Thinking"],
        illnesses: ["Schizophrenia", "Bipolar Disorder", "Psychotic Disorder"],
        drugs: ["Antipsychotics", "Mood Stabilizers", "Antidepressants"]
    },
    {
        symptoms: ["Rash", "Itching", "Redness"],
        illnesses: ["Eczema", "Contact Dermatitis", "Allergic Reaction"],
        drugs: ["Topical Corticosteroids", "Antihistamines", "Moisturizers"]
    },
    {
        symptoms: ["Acne", "Blackheads", "Whiteheads"],
        illnesses: ["Acne Vulgaris", "Rosacea", "Folliculitis"],
        drugs: ["Topical Antibiotics", "Retinoids", "Hormonal Treatments"]
    },
    {
        symptoms: ["Dry Skin", "Itching", "Cracking"],
        illnesses: ["Dry Skin", "Eczema", "Psoriasis"],
        drugs: ["Moisturizers", "Topical Corticosteroids", "Humectants"]
    },
    {
        symptoms: ["Abdominal Pain", "Diarrhea", "Nausea"],
        illnesses: ["Gastroenteritis", "Irritable Bowel Syndrome (IBS)", "Food Poisoning"],
        drugs: ["Antibiotics", "Anti-diarrheal Medications", "Antacids"]
    },
    {
        symptoms: ["Bloating", "Gas", "Abdominal Pain"],
        illnesses: ["IBS", "Gastroesophageal Reflux Disease (GERD)", "Lactose Intolerance"],
        drugs: ["Antacids", "Proton Pump Inhibitors", "Lactase Enzyme Supplements"]
    },
    {
        symptoms: ["Vomiting", "Diarrhea", "Abdominal Pain"],
        illnesses: ["Food Poisoning", "Gastroenteritis", "Viral Gastroenteritis"],
        drugs: ["Antibiotics", "Anti-diarrheal Medications", "Fluid Replacement Therapy"]
    },
    {
        symptoms: ["Coughing", "Wheezing", "Shortness of Breath"],
        illnesses: ["Asthma", "Chronic Obstructive Pulmonary Disease (COPD)", "Pneumonia"],
        drugs: ["Inhalers", "Bronchodilators", "Antibiotics"]
    },
    {
        symptoms: ["Sore Throat", "Coughing", "Fatigue"],
        illnesses: ["Acute Bronchitis", "Pneumonia", "Influenza"],
        drugs: ["Antibiotics", "Cough Suppressants", "Pain Relievers"]
    },
    {
        symptoms: ["Chest Tightness", "Coughing", "Wheezing"],
        illnesses: ["Asthma", "COPD", "Pulmonary Embolism"],
        drugs: ["Inhalers", "Bronchodilators", "Anticoagulants"]
    },
    {
        symptoms: ["Redness", "Itching", "Burning", "Blurred Vision", "Discharge or Crusting", "Eye Pain"],
        illnesses: ["Conjunctivitis (Pink Eye)", "Allergies", "Dry Eye Syndrome", "Blepharitis", "Uveitis"],
        drugs: ["Antibiotic Eye Drops", "Antihistamine Eye Drops", "Steroid Eye Drops", "Artificial Tears", "Pain Relievers (e.g. Acetaminophen or Ibuprofen)"]
    },
    {
    symptoms: ["Genital Sores", "Painful Urination", "Abnormal Discharge"],
        illnesses: ["Chlamydia", "Gonorrhea", "Syphilis"],
        drugs: ["Antibiotics", "Antiprotozoals", "Antivirals"]
    },

];

module.exports = data;
