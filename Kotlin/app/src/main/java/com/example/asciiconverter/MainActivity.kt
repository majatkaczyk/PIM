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

        // Dodaj obsługę przycisku
        convertButton.setOnClickListener {
            val inputCharacter = inputEditText.text.toString()

            if (inputCharacter.length == 1) {
                val asciiValue = inputCharacter[0].toInt()
                resultTextView.text = "Wartość ASCII: $asciiValue"
            } else {
                resultTextView.text = "Proszę wpisać dokładnie jeden znak."
            }
        }
    }
}
