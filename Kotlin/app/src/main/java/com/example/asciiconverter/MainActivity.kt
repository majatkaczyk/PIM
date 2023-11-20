package com.example.asciiconverter

import android.os.Bundle
import android.view.View
import androidx.appcompat.app.AppCompatActivity
import android.widget.Button
import android.widget.EditText
import android.widget.ImageView
import android.widget.TextView

class MainActivity : AppCompatActivity() {
    private lateinit var inputEditText: EditText
    private lateinit var convertButton: Button
    private lateinit var resultTextView: TextView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // Inicjalizacja elementów interfejsu użytkownika
        inputEditText = findViewById(R.id.inputEditText)
        convertButton = findViewById(R.id.convertButton)
        resultTextView = findViewById(R.id.resultTextView)

        val asciiBtn = findViewById<Button>(R.id.asciiBtn)
        val textBtn = findViewById<Button>(R.id.textBtn)
        val navToMinigameBtn = findViewById<Button>(R.id.navToMinigame)
        val refreshButton = findViewById<Button>(R.id.refreshButton)
        val navBackBtn = findViewById<Button>(R.id.back_to_con)
        val checkAnswerBtn = findViewById<Button>(R.id.checkAnswerBtn)

        val title = findViewById<TextView>(R.id.ascii_conve)
        val enterAsciiTextView = findViewById<TextView>(R.id.enter_ascii)
        val container = findViewById<View>(R.id.rectangle_1)
        val imageView = findViewById<ImageView>(R.id.imageView)

        val notPressedDrawable = resources.getDrawable(R.drawable.notpressed, null)
        val pressedDrawable = resources.getDrawable(R.drawable.pressed, null)

        var isASCIItoText = true
        var isCalculator = true

        // Dodaj obsługę przycisku
        convertButton.setOnClickListener {
            if(isASCIItoText){
                val inputDecimal = inputEditText.text.toString()

                try {
                    val asciiValue = inputDecimal.toInt()

                    if (asciiValue in 33..126) {
                        val asciiChar = asciiValue.toChar()
                        resultTextView.text = "Znak ASCII: $asciiChar"
                    } else {
                        resultTextView.text = "Proszę wprowadzić liczbę ASCII z zakresu 0-127."
                    }
                } catch (e: NumberFormatException) {
                    resultTextView.text = "Proszę wprowadzić poprawną liczbę całkowitą."
                }
            }
            else{
                val inputCharacter = inputEditText.text.toString()

                if (inputCharacter.length == 1) {
                    val asciiValue = inputCharacter[0].toInt()
                    resultTextView.text = "Wartość ASCII: $asciiValue"
                } else {
                    resultTextView.text = "Proszę wpisać dokładnie jeden znak."
                }
            }
        }
        fun changeContainerHeight(value:Int){
            // Pobierz obecne parametry układu
            val layoutParams = container.layoutParams
            layoutParams.height = value
            container.layoutParams = layoutParams
        }
        asciiBtn.setOnClickListener {
            // Zmieniamy tekst w TextView o id enter_ascii
            if(isCalculator){
                enterAsciiTextView.text = "Enter ASCII decimal number:"
            }
            else enterAsciiTextView.text = "Guess the text:"

            isASCIItoText = true

            asciiBtn.background = pressedDrawable
            asciiBtn.setTextColor(android.graphics.Color.parseColor("#19686A"))
            textBtn.background = notPressedDrawable
            textBtn.setTextColor(android.graphics.Color.parseColor("#000000"))
        }
        textBtn.setOnClickListener{
            if(isCalculator){
                enterAsciiTextView.text = "Enter text:"
            }
            else enterAsciiTextView.text = "Guess the ASCII code:"

            isASCIItoText = false

            asciiBtn.background = notPressedDrawable
            asciiBtn.setTextColor(android.graphics.Color.parseColor("#000000"))
            textBtn.background = pressedDrawable
            textBtn.setTextColor(android.graphics.Color.parseColor("#19686A"))
        }
//        navigation methods:
        val inputTxt = findViewById<TextView>(R.id.enter_ascii)
        val outputTxt = findViewById<TextView>(R.id.outputTxt)

        val gameOutput = findViewById<TextView>(R.id.gameOutput)
        val gameInput = findViewById<TextView>(R.id.gameInput)

        navToMinigameBtn.setOnClickListener{
            isCalculator = false
            navToMinigameBtn.visibility = View.INVISIBLE
            title.text = "Mini game"
            if(isASCIItoText) inputTxt.text = "Guess the text:"
            else inputTxt.text = "Guess the ASCII code:"
            outputTxt.text = "Your answer:"
            convertButton.visibility = View.INVISIBLE
            refreshButton.visibility = View.VISIBLE
            navBackBtn.visibility = View.VISIBLE
            checkAnswerBtn.visibility = View.VISIBLE
            imageView.visibility = View.VISIBLE

            //set input/output style:
            gameInput.visibility = View.VISIBLE
            gameOutput.visibility = View.VISIBLE
            inputEditText.visibility = View.INVISIBLE
            resultTextView.visibility = View.INVISIBLE

            // Pobierz obecne parametry układu
            changeContainerHeight(996)
        }

        navBackBtn.setOnClickListener{
            isCalculator=true
            navToMinigameBtn.visibility = View.VISIBLE
            title.text = "ASCII converter"
            if(isASCIItoText) inputTxt.text = "Enter ASCII decimal number:"
            else inputTxt.text = "Enter text:"
            outputTxt.text = "Output:"
            convertButton.visibility = View.VISIBLE
            refreshButton.visibility = View.INVISIBLE
            navBackBtn.visibility = View.INVISIBLE
            checkAnswerBtn.visibility = View.INVISIBLE
            imageView.visibility = View.INVISIBLE

            //set input/output style:
            gameInput.visibility = View.INVISIBLE
            gameOutput.visibility = View.INVISIBLE
            inputEditText.visibility = View.VISIBLE
            resultTextView.visibility = View.VISIBLE

            // Pobierz obecne parametry układu
            changeContainerHeight(822)
        }

    }

}
