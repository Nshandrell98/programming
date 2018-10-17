function petfinder(spider, parrot, dog, cat, fish, snake, rabbit, hamster){
    var pet= "";
    var question1 = "Is your animal a mammal? yes or no";
    var question2 = "Is your animal a small mammal?yes or no";
    var question3 = "Does your animal hop? yes or no";
    var question4 = "Does your animal bark? yes or no"; 
    var question5 = "Does your animal have scales? yes or no";
    var question6 = "Does your animal have fins? yes or no";
    var question7 = "Is your animal an arachnid? yes or no";

    prompt(question1);
    if (question1.toLowerCase() == "yes"){
        prompt(question2);
        if (question2.toLowerCase() == "yes"){
            prompt(question3);
            if (question3.toLowerCase() == "yes"){
                pet = rabbit;
                document.write("Your animal is a ", pet, ".");
            }
            if (question3.lower() == "no"){
                pet = hamster;
                document.write("Your animal is a ", pet, ".");
            }
        }
        if (question2.toLowerCase() == "no"){
            prompt(question4);
            if (question4.toLowerCase() == "yes"){
                pet = dog;
                document.write("Your animal is a ", pet, ".");
            }
            if (question4.toLowerCase() == "no"){
                pet = cat;
                document.write("Your animal is a ", pet, ".");
            }
        }
    }
    if (question1.toLowerCase() == "no"){
        prompt(question5);
        if (question5.toLowerCase() == "yes"){
            prompt(question6);
            if (question6.toLowerCase() == "yes"){
                pet = fish;
                document.write("Your animal is a ", pet, ".");
            }
            if (question6.toLowerCase() == "no"){
                pet = snake;
                document.write("Your animal is a ", pet, ".");
            }
        }
        if (question5.toLowerCase() == "no"){
            prompt(question7);
            if (question7.toLowerCase() == "yes"){
                pet = spider;
                document.write("Your animal is a ", pet, ".");
            }
            if (question7.toLowerCase() == "no"){
                pet = parrot;
                document.write("Your animal is a ", pet, ".");
            }
        }
    }
}
