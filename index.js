window.prompt('Salutations')
window.prompt('May we play a game of Yes and No?')
var firstAnswer = window.prompt('Do you believe in Darwin?')
if (firstAnswer === 'Yes') {
    let secondAnswer = window.prompt('Do you believe in progress?') 
    if (secondAnswer === 'Yes') {
        let thirdAnswer = window.prompt('What does it mean to progress? Is there a certain direction which all that is trends towards? In the vast unconditional emptiness of existence, this conclusion seems unlikely. Do you welcome your end?')
        if (thirdAnswer === 'Yes') {
            let fourthAnswer = window.alert('Then I suppose congratulations are due as it seems you have overcome the conundrum of living trials.')
        } else if (thirdAnswer === 'No') {
            let fourthAnswer = window.prompt('It would seem no organic entity does. Could you if it were unilaterally for the better?')
         switch (fourthAnswer) {
            case "Yes":
                window.alert('HAHAHHAHAHAH I wonder');
                break;
            case "No":
                window.alert('Indeed that seems very human of you');
            break;
            default:
                window.alert('Shut your corny ass up you weak licentious blight')
        }}        
    } else if (secondAnswer === 'No') {
        let thirdAnswer = window.prompt('Do you believe in Entropy?')
        if (thirdAnswer ==='Yes') {
            let fourthAnswer = window.prompt('Indeed. It seems inevitable that impermanence is the nature of existence. Do you welcome your end?')
            switch (fourthAnswer) {
                case "Yes":
                    window.alert('HAHAHHAHAHAH I wonder');
                    break;
                case "No":
                    window.alert('Indeed that seems very human of you');
                break;
                default:
                    window.alert('Shut your corny ass up you weak licentious blight')
            } 
        } else if(thirdAnswer == "No") {
        let thirdAnswer = window.alert('How blissfully ignorant of you')
        }
    }
} else if (firstAnswer === 'No') {
    let secondAnswer = window.prompt('Do you believe in Entropy?') 
    if (secondAnswer === 'No') {
        let thirdAnswer = window.alert('How blissfully ignorant of you')
    } else if (secondAnswer === 'Yes') { 
        let thirdAnswer = window.prompt('Indeed. It seems inevitable that impermanence is the nature of existence. Do you welcome your end?')
        if (thirdAnswer == 'Yes') {
            let fourthAnswer = window.alert ('Then I suppose congratulations are due as it seems you have overcome the conundrum of living trials.')
        } else if (thirdAnswer == 'No') {
            let fourthAnswer = window.prompt('It would seem no organic entity does. Could you if it were unilaterally for the better?')
         switch (fourthAnswer) {
            case "Yes":
                window.alert('HAHAHHAHAHAH I wonder');
                break;
            case "No":
                window.alert('Indeed that seems very human of you');
            break;
            default:
                window.alert('Shut your corny ass up you weak licentious blight')
        }
    }    
}
} 
window.alert('If only you knew')