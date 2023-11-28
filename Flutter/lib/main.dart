
import 'package:flutter/material.dart';
import 'dart:math';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'ASCII converter Flutter',
      theme: ThemeData(
        scaffoldBackgroundColor: const Color(0xFFF0F2E9),
      ),
      home: const MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key}) : super(key: key);

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _selectedIndex = 0;
  TextEditingController asciiController = TextEditingController();
  String _convertedCharacter = '';

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  void _convertAsciiToCharacter() {
    int asciiCode = int.tryParse(asciiController.text) ?? 0;

    if (asciiCode >= 33 && asciiCode <= 126) {
      setState(() {
        _convertedCharacter = String.fromCharCode(asciiCode);
      });
    } else {
      setState(() {
        _convertedCharacter = 'Please enter a proper number';
      });
    }
  }

  void _convertTextToAscii() {
    String text = asciiController.text;
    if (text.isNotEmpty) {
      int asciiCode = text.codeUnitAt(0);
      setState(() {
        _convertedCharacter = asciiCode.toString();
      });
    } else {
      setState(() {
        _convertedCharacter = "Please enter one character";
      });
    }
  }

  void goToMiniGame() {
    Navigator.push(
      context,
      MaterialPageRoute(builder: (context) => const MyMiniGame()),
    );
  }

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 2,
      child: Scaffold(
        appBar: AppBar(
          backgroundColor: const Color(0xFFF0F2E9),
        ),
        body: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 35.0),
          child: SingleChildScrollView(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                Container(padding: const EdgeInsets.only(bottom: 10.0),child: const Text(
                  "ASCII converter",
                  style: TextStyle(
                      fontSize: 32,
                      fontFamily: 'Nunito',
                      color: Color(0xff082929)

                  ),
                ),),

                Container(
                  decoration: const BoxDecoration(
                    color: Color(0xffffffff),
                    borderRadius: BorderRadius.only(
                        topLeft: Radius.circular(10.0),
                        topRight: Radius.circular(10.0)),
                  ),
                  child: const TabBar(
                    tabs: [
                      Tab(child: Text(
                        "ASCII to text",
                        style: TextStyle(
                            fontSize: 16,
                            fontFamily: 'Poppins',
                            color: Color(0xff19686A),
                          fontWeight: FontWeight.w400
                        ),
                      ),),
                      Tab(child: Text(
                        "Text to ASCII",
                        style: TextStyle(
                            fontSize: 16,
                            fontFamily: 'Poppins',
                            color: Color(0xff19686A),
                            fontWeight: FontWeight.w400
                        ),
                      ),)
                    ],
                    indicatorColor: Color(0xff19686A),
                    indicatorSize: TabBarIndicatorSize.tab,
                    labelColor: Color(0xff19686A),
                  ),
                ),
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 25.0),
                  decoration: const BoxDecoration(
                    borderRadius: BorderRadius.only(
                        bottomLeft: Radius.circular(10.0),
                        bottomRight: Radius.circular(10.0)),
                    color: Color(0xffffffff),
                  ),
                  child: SizedBox(
                    height: 250,
                    child: TabBarView(
                      children: <Widget>[
                        Column(
                            mainAxisAlignment: MainAxisAlignment.start,
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              const Padding(
                                  padding: EdgeInsets.only(top: 25, bottom: 10),
                                  child: Text(
                                    "Enter ASCII decimal number:",
                                    style: TextStyle(
                                        fontSize: 16,
                                        fontFamily: 'Poppins',
                                        fontWeight: FontWeight.w300
                                    ),
                                  ),
                                  ),
                              Row(
                                mainAxisAlignment:
                                MainAxisAlignment.spaceBetween,
                                children: <Widget>[
                                  SizedBox(
                                    width: 134,
                                    height: 55,
                                    child: TextField(
                                      keyboardType: TextInputType.number,
                                      controller: asciiController,
                                      decoration: const InputDecoration(
                                        border: OutlineInputBorder(
                                            borderRadius: BorderRadius.all(
                                                Radius.circular(5.0)),
                                          borderSide: BorderSide(color: Color(0xff19686A), width: 1.0, style: BorderStyle.solid)
                                        ),
                                        
                                      ),
                                    ),
                                  ),
                                  ElevatedButton(
                                    onPressed: _convertAsciiToCharacter,
                                    style: ElevatedButton.styleFrom(
                                      backgroundColor:
                                      const Color(0xffA0CFD0),
                                      minimumSize: const Size(134, 55),
                                      shape: RoundedRectangleBorder(
                                        borderRadius: BorderRadius.circular(3),
                                      ),
                                    ),
                                    child: const Text(
                                      'Convert',
                                      style: TextStyle(
                                        fontSize: 18,
                                        color: Colors.black,
                                          fontFamily: 'Poppins',
                                          fontWeight: FontWeight.w500
                                      ),
                                    ),
                                  ),
                                ],
                              ),
                              const Padding(
                                  padding: EdgeInsets.only(top: 15, bottom: 10),
                                  child: Text("Output:", style: TextStyle(fontSize: 16,
                                      fontFamily: 'Poppins',
                                      fontWeight: FontWeight.w300),)),
                              Container(
                                width: 300,
                                height: 55,
                                decoration: const BoxDecoration(
                                    color: Color(0xffE7F3F3),
                                    borderRadius: BorderRadius.all(
                                        Radius.circular(3.0))),
                                child: Text(
                                  _convertedCharacter,
                                  style: const TextStyle(
                                    fontSize: 18,
                                    color: Colors.black,
                                  ),
                                ),
                              )
                            ]),
                        Column(
                            mainAxisAlignment: MainAxisAlignment.start,
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              const Padding(
                                  padding: EdgeInsets.only(top: 25, bottom: 10),
                                  child: Text(
                                      "Enter text:",
                                      style: TextStyle(
                                          fontSize: 16,
                                          fontFamily: 'Poppins',
                                          fontWeight: FontWeight.w300
                                      ),
                                    )),
                              Row(
                                mainAxisAlignment:
                                MainAxisAlignment.spaceBetween,
                                children: <Widget>[
                                  SizedBox(
                                    width: 134,
                                    height: 55,
                                    child: TextField(
                                      keyboardType: TextInputType.text,
                                      controller: asciiController,
                                      decoration: const InputDecoration(
                                        border: OutlineInputBorder(
                                            borderRadius: BorderRadius.all(
                                                Radius.circular(5.0)),
                                            borderSide: BorderSide(color: Color(0xff19686A), width: 1.0, style: BorderStyle.solid)),
                                      ),
                                    ),
                                  ),
                                  ElevatedButton(
                                    onPressed: _convertTextToAscii,
                                    style: ElevatedButton.styleFrom(
                                      backgroundColor:
                                      const Color(0xffA0CFD0),
                                      minimumSize: const Size(134, 55),
                                      shape: RoundedRectangleBorder(
                                        borderRadius: BorderRadius.circular(3),
                                      ),
                                    ),
                                    child: const Text(
                                      "Convert",
                                      style: TextStyle(
                                        fontSize: 18,
                                        color: Colors.black,
                                          fontFamily: 'Poppins',
                                          fontWeight: FontWeight.w500
                                      ),
                                    ),
                                  )
                                ],
                              ),
                              const Padding(
                                  padding: EdgeInsets.symmetric(
                                      vertical: 20.0),
                                  child: Text("Output:")),
                              Container(
                                width: 300,
                                height: 55,
                                decoration: const BoxDecoration(
                                    color: Color(0xffE7F3F3),
                                    borderRadius: BorderRadius.all(
                                        Radius.circular(3.0))),
                                child: Text(
                                  _convertedCharacter,
                                  style: const TextStyle(
                                    fontSize: 18,
                                    color: Colors.black,
                                  ),
                                ),
                              )
                            ]),
                      ],
                    ),
                  ),
                ),
                Center(
                  child: Container(
                      padding: const EdgeInsets.symmetric(vertical: 20.0),
                      child: ElevatedButton(
                        onPressed: goToMiniGame,
                        style: ElevatedButton.styleFrom(
                          backgroundColor: const Color(0xff19686a),
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(10),
                          ),
                          minimumSize: const Size(340, 55),
                        ),
                        child: const Text(
                          'Mini game',
                          style: TextStyle(
                            fontSize: 18,
                            color: Colors.white,
                              fontFamily: 'Poppins',
                              fontWeight: FontWeight.w500

                          ),
                        ),
                      )),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class MyMiniGame extends StatefulWidget {
  const MyMiniGame({Key? key}) : super(key: key);

  @override
  State<MyMiniGame> createState() => _MyMiniGameState();
}

class _MyMiniGameState extends State<MyMiniGame> {
  TextEditingController answerController = TextEditingController();
  String _convertedCharacter = '';
  bool _isAsciiToTxt = true;

  void onRefresh(int tabIndex) {
    Random random = Random();
    int randomInt = random.nextInt(94) + 33;

    if(tabIndex==0){
      setState(() {
        _convertedCharacter = randomInt.toString();
      });
      _isAsciiToTxt = true;
    }else{
      setState(() {
        _convertedCharacter = String.fromCharCode(randomInt);
      });
      _isAsciiToTxt = false;
      }
    }

  void _checkAnswer() {
    String answer = answerController.text;

    if(_isAsciiToTxt){
      String convertedQuestion = String.fromCharCode(int.parse(_convertedCharacter));
      if(answer==convertedQuestion){
        _showAnswerModal("Good answer!");
      }
      else{
        _showAnswerModal("Wrong answer!");
      }
    }else{
      try{
        String convertedAnswer = String.fromCharCode(int.parse(answer));
        if(convertedAnswer==_convertedCharacter){
          _showAnswerModal("Good answer!");
        }
        else{
          _showAnswerModal("Wrong answer!");
        }
      }catch(e){
        _showAnswerModal("Wrong answer!");
      }

    }

  }

  void _showAnswerModal(message) {
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          backgroundColor: Colors.white,
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(3.0)),
          content: SizedBox(
            width: 301,
            height: 151,
            child:
                Center(child: Container(

                  child: Text(message, style: TextStyle(fontSize: 20,

                      fontFamily: 'Poppins',
                      fontWeight: FontWeight.w400),),
                ),)

          ),
          actions: [
            ElevatedButton(
              onPressed: () {
                Navigator.of(context).pop();
              },style: ElevatedButton.styleFrom(
              backgroundColor: const Color(0xff19686A),
              minimumSize: const Size(300, 55),
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(3),
              ),
            ),
              child: const Text("Start again", style: TextStyle(fontSize: 18,
color: Colors.white,
                  fontFamily: 'Poppins',
                  fontWeight: FontWeight.w400),),
            ),
          ],
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 2,
      child: Scaffold(
        appBar: AppBar(
          backgroundColor: const Color(0xFFF0F2E9),
        ),
        body: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 35.0),
          child: SingleChildScrollView(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                Container(padding: const EdgeInsets.only(bottom: 10.0),child: const Text(
                  "Mini game",
                  style: TextStyle(
                      fontSize: 32,
                      fontFamily: 'Nunito',
                      color: Color(0xff082929)
                  ),
                ),),
                Container(
                  decoration: const BoxDecoration(
                    color: Color(0xffffffff),
                    borderRadius: BorderRadius.only(
                        topLeft: Radius.circular(10.0),
                        topRight: Radius.circular(10.0)),
                  ),
                  child: const TabBar(
                    tabs: [
                      Tab(child: Text(
                        "ASCII to text",
                        style: TextStyle(
                            fontSize: 16,
                            fontFamily: 'Poppins',
                            color: Color(0xff19686A),
                            fontWeight: FontWeight.w400
                        ),
                      ),),
                      Tab(child: Text(
                        "Text to ASCII",
                        style: TextStyle(
                            fontSize: 16,
                            fontFamily: 'Poppins',
                            color: Color(0xff19686A),
                            fontWeight: FontWeight.w400
                        ),
                      ),)
                    ],
                    indicatorColor: Color(0xff19686A),
                    indicatorSize: TabBarIndicatorSize.tab,
                    labelColor: Color(0xff19686A),
                  ),
                ),
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 25.0),
                  decoration: const BoxDecoration(
                    borderRadius: BorderRadius.only(
                        bottomLeft: Radius.circular(10.0),
                        bottomRight: Radius.circular(10.0)),
                    color: Color(0xffffffff),
                  ),
                  child: SizedBox(
                    height: 320,
                    child: TabBarView(
                      children: <Widget>[
                        _buildGuessWidget("Guess the text:", "char", 0),
                        _buildGuessWidget("Guess the ASCII code:", "char", 1),
                      ],
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildGuessWidget(
      String labelText, String textHint, int tabIndex) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.start,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Padding(
          padding: const EdgeInsets.only(top: 25, bottom: 10),
          child: Text(labelText, style: const TextStyle(fontSize: 16,
              fontFamily: 'Poppins',
              fontWeight: FontWeight.w300),),
        ),
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: <Widget>[
            Container(
              width: 134,
              height: 55,
              decoration: const BoxDecoration(
                color: Color(0xffE7F3F3),
                borderRadius: BorderRadius.all(Radius.circular(3.0)),
              ),
              child: Text(
                _convertedCharacter,
                style: const TextStyle(
                    fontSize: 16,
                    fontFamily: 'Poppins',
                    fontWeight: FontWeight.w300
                ),
              ),
            ),
            ElevatedButton(
              onPressed: () {
                if (tabIndex == 0) {
                  // Dla pierwszej karty
                  onRefresh(0);
                } else if (tabIndex == 1) {
                  // Dla drugiej karty
                  onRefresh(1);
                }
              },
              style: ElevatedButton.styleFrom(
                backgroundColor: const Color(0xffA0CFD0),
                minimumSize: const Size(134, 55),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(3),
                ),
              ),
              child: const Text(
                'Refresh',
                style: TextStyle(
                  fontSize: 18,
                  color: Colors.black,
                    fontFamily: 'Poppins',
                    fontWeight: FontWeight.w500
                ),
              ),
            ),
          ],
        ),
        const Padding(
          padding: EdgeInsets.only(top: 15, bottom: 10),
          child: Text("Your answer:", style: TextStyle(fontSize: 16,
              fontFamily: 'Poppins',
              fontWeight: FontWeight.w300),),
        ),
        SizedBox(
          width: 300,
          height: 55,
          child: TextField(
            controller: answerController,
            keyboardType: TextInputType.text,
            decoration: const InputDecoration(
              border: OutlineInputBorder(
                borderRadius: BorderRadius.all(Radius.circular(5.0)),
              ),
            ),
          ),
        ),
        Container(
          padding: const EdgeInsets.symmetric(vertical: 20.0),
          child: ElevatedButton(
            onPressed: _checkAnswer,
            style: ElevatedButton.styleFrom(
              backgroundColor: const Color(0xffA0CFD0),
              minimumSize: const Size(300, 55),
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(3),
              ),
            ),
            child: const Text(
              'Check answer',
              style: TextStyle(
                fontSize: 18,
                color: Colors.black,
                  fontFamily: 'Poppins',
                  fontWeight: FontWeight.w500
              ),
            ),
          ),
        ),
      ],
    );
  }
}
