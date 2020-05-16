console.log("entro al schema");
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
console.log("definio schema");

const EncountersSchema =new Schema({
    schedule: {
        type: Date, required: false
    }, subjetive: {
        rendering: {
            type: String, required: true
        }, chiefComplaint: {
            type: String, required: true
        }, gastroIntestinal: {
            abdominalPain: {
                howLongHaveYouHadAbdominalPain: {
                    type: String, enum: [
                        "0-24 Hours",
                        "1-3 Days",
                        "4-7 Days"
                    ]
                }, whereIsYourAbdominalPainLocated: {
                    type: String, enum: [
                        "Entire Abdomen",
                        "Upper Abdomen",
                        "Lower Abdomen",
                        "Left Abdomen",
                        "Right Abdomen"
                    ]
                }, doesThePainRadiateOfMoveToAnotherLocation: {
                    type: String, enum: [
                        "No",
                        "Yes"
                    ]
                }, DidYourAbdominalPainStartAllOfASuddenOrDidItComeOnSlowly: {
                    type: String, enum: [
                        "Suddlendly",
                        "Slowly"
                    ]
                }, DoesYourAbdominalPainOccurAfterEating: {
                    type: String, enum: [
                        "No",
                        "Yes"
                    ]
                }
            }, diarrhea: {
                HowLongHaveYouHadYourDiarrheaSymptoms: {
                    type: String, enum: [
                        "0-24 Hours",
                        "1-3 Days",
                        "4-7 Days"
                    ]
                }, HaveYouHadAFeverWithYourDiarrhea: {
                    type: String, enum: [
                        "No",
                        "Yes"
                    ]
                }, HowWouldYouDescribeTheSeverityOfYourSymptoms: {
                    type: String, enum: [
                        "Mild",
                        "Moderate",
                        "Severe"
                    ]
                }, HowHaveYourSymptomsChangedSinceTheyStarted: {
                    type: String, enum: [
                        "Better",
                        "The Same",
                        "Worse"
                    ]
                }
            }, vomiting: {
                HowLongHaveYouHadYourVomitSymptoms: {
                    type: String, enum: [
                        "0-24 Hours",
                        "1-3 Days",
                        "4-7 Days"
                    ]
                }, HaveYouHadAFeverWithYourVomit: {
                    type: String, enum: [
                        "No",
                        "Yes"
                    ]
                }, WhenDoesTheVomitingOccur: {
                    type: String, enum: [
                        "Before Meals",
                        "During the Meals",
                        "Any Time"
                    ]
                }
            }
        }, respiratory: {
            flu: {
                HowLongHaveYouHadFluLikeSymptoms: {
                    type: String, enum: [
                        "0-24 Hours",
                        "1-3 Days",
                        "4-7 Days"
                    ]
                }, HaveYouHadAFever: {
                    type: String, enum: [
                        "No",
                        "Yes"
                    ]
                }, HaveYouHadAHeadache: {
                    type: String, enum: [
                        "No",
                        "Yes"
                    ]
                }, DidYourSymptomsStartSuddenlyOrComeOnSlowly: {
                    type: String, enum: [
                        "Suddlendly",
                        "Slowly"
                    ]
                }, HaveYouHadARunnyNose: {
                    type: String, enum: [
                        "No",
                        "Yes"
                    ]
                }
            }, bronchities: {
                HowLongHaveYouHadBronchitis: {
                    type: String, enum: [
                        "0-24 Hours",
                        "1-3 Days",
                        "4-7 Days"
                    ]
                }, HaveYouHadACough: {
                    type: String, enum: [
                        "No",
                        "Yes"
                    ]
                }, DoYouHaveASoreThroat: {
                    type: String, enum: [
                        "No",
                        "Yes"
                    ]
                }, DoYourSymptomsAffectYourSleep: {
                    type: String, enum: [
                        "No",
                        "Yes"
                    ]
                }
            }
        }
    }, objective: {
        HighPressure: {
            type: Number
        }, LowPressure: {
            type: Number
        }, Pulse: {
            type: Number
        }, Temperature: {
            type: Number
        }, Height: {
            type: Number
        }, Weight: {
            type: Number
        }, BMI: {
            type: Number
        }

    },
    is_Active: {
        type: Boolean,
        default: true
      }
}); 

const Encounters = mongoose.model('Encounter', EncountersSchema);

module.exports = Encounters;

