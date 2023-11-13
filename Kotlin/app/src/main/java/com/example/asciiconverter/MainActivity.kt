package com.example.asciiconverter

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import android.widget.Button
import android.widget.EditText
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
//        val myButton: Button = findViewById(R.id.myButton)
//        myButton.setBackgroundResource(R.drawable.moj_plik_drawable)
        val enterAsciiTextView = findViewById<TextView>(R.id.enter_ascii)

        val notPressedDrawable = resources.getDrawable(R.drawable.notpressed, null)
        val pressedDrawable = resources.getDrawable(R.drawable.pressed, null)
        var isASCIItoText = true

        // Dodaj obsługę przycisku
        convertButton.setOnClickListener {
            if(isASCIItoText){
                val inputDecimal = inputEditText.text.toString()

                try {
                    val asciiValue = inputDecimal.toInt()

                    if (asciiValue in 0..127) {
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
        asciiBtn.setOnClickListener {
            // Zmieniamy tekst w TextView o id enter_ascii
            enterAsciiTextView.text = "Enter ASCII decimal number:"
            isASCIItoText = true

            asciiBtn.background = pressedDrawable
            textBtn.background = notPressedDrawable
        }
        textBtn.setOnClickListener{
            enterAsciiTextView.text = "Enter text:"
            isASCIItoText = false

            asciiBtn.background = notPressedDrawable
            textBtn.background = pressedDrawable
        }
    }
}
