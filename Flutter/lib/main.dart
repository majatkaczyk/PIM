import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key, Key? ke});

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
  const MyHomePage({super.key, Key? ke});

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
    setState(() {
      _convertedCharacter = String.fromCharCode(asciiCode);
    });
  }
  void goToMiniGame() {
    Navigator.push(
      context,
      MaterialPageRoute(builder: (context) => const MiniGameScreen()), // Dodano
    );
  }
  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 2,
      child: Scaffold(appBar: AppBar(
        backgroundColor: const Color(0xFFF0F2E9),

),
        body: Padding(padding: const EdgeInsets.symmetric(horizontal: 45.0),
          child:SingleChildScrollView(
            child: Column(

              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.start,

              children: <Widget>[

              const Text("ASCII converter",
                style: TextStyle(
                  fontSize: 32,
                ),),
              Container(
                decoration: const BoxDecoration( color: Color(0xffffffff), borderRadius: BorderRadius.only(topLeft: Radius.circular(10.0), topRight: Radius.circular(10.0))),
                child:const TabBar(
                tabs:
                [ Tab(text: "ASCII to text"),
                  Tab(text: "Text to ACII")
                ],
                indicatorColor: Color(0xff19686A),
                indicatorSize: TabBarIndicatorSize.tab,
                labelColor: Color(0xff19686A),
              ),),
              Container(padding: const EdgeInsets.symmetric(horizontal: 30.0),
                decoration: const BoxDecoration(
                borderRadius: BorderRadius.only(
                  bottomLeft: Radius.circular(10.0), bottomRight: Radius.circular(10.0))
                , color: Color(0xffffffff),
              ),child:  SizedBox(height: 300,
                child: TabBarView(
                children: <Widget>[
                  Column(mainAxisAlignment: MainAxisAlignment.start,crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        const Padding(padding: EdgeInsets.symmetric(vertical: 20.0), child: Text("Enter ASCII decimal number:")),
                        Row(mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: <Widget>
                          [SizedBox( width: 120, height: 51,
                            child: TextField(
                              keyboardType: TextInputType.number,
                              controller: asciiController,
                              decoration: const InputDecoration(
                                border: OutlineInputBorder(
                                 borderRadius: BorderRadius.all(Radius.circular(5.0))
                                ),
                              ),
                            ),
                          ),
                          ElevatedButton(
                            onPressed: _convertAsciiToCharacter,
                            style: ElevatedButton.styleFrom(
                              backgroundColor: const Color(0xffA0CFD0),
                              minimumSize: const Size(120, 51),
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(3),
                              ),
                            ),
                            child: const Text(
                              'Convert',
                              style: TextStyle(
                                fontSize: 18,
                                color: Colors.black,
                              ),
                            ),),

                        ],),
                        const Padding(padding: EdgeInsets.symmetric(vertical: 20.0), child: Text("Output:")),
                        Container(width: 281, height: 51,
                        decoration: const BoxDecoration(color: Color(0xffE7F3F3), borderRadius: BorderRadius.all(Radius.circular(3.0))),
                        child: Text(_convertedCharacter,
                          style: const TextStyle(
                            fontSize: 18,
                            color: Colors.black,

                          ),),)
                        
                      ]),
                  Column(mainAxisAlignment: MainAxisAlignment.start,crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        const Padding(padding: EdgeInsets.symmetric(vertical: 20.0), child: Text("Enter text:")),
                        Row(mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: <Widget>
                          [SizedBox( width: 120, height: 51,
                              child: TextField(
                                keyboardType: TextInputType.text,
                                controller: asciiController,
                                decoration: const InputDecoration(
                                  border: OutlineInputBorder(
                                      borderRadius: BorderRadius.all(Radius.circular(5.0))
                                  ),
                                ),
                              ),
                            ),
                            ElevatedButton(
                              onPressed: _convertAsciiToCharacter,
                              style: ElevatedButton.styleFrom(
                                backgroundColor: const Color(0xffA0CFD0),
                                minimumSize: const Size(120, 51),
                                shape: RoundedRectangleBorder(
                                  borderRadius: BorderRadius.circular(3),
                                ),
                              ),
                              child: const Text(
                                'Convert',
                                style: TextStyle(
                                  fontSize: 18,
                                  color: Colors.black,
                                ),
                              ),),

                          ],),
                        const Padding(padding: EdgeInsets.symmetric(vertical: 20.0), child: Text("Output:")),
                        Container(width: 281, height: 51,
                          decoration: const BoxDecoration(color: Color(0xffE7F3F3), borderRadius: BorderRadius.all(Radius.circular(3.0))),
                          child: Text(_convertedCharacter,
                            style: const TextStyle(
                              fontSize: 18,
                              color: Colors.black,

                            ),),)

                      ]),
                ],
              )),),


              Center(
                child: Container(padding: const EdgeInsets.symmetric(vertical: 20.0),
                    child: ElevatedButton(
                      onPressed: goToMiniGame,
                      style: ElevatedButton.styleFrom(
                        backgroundColor: const Color(0xff19686a),
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(10),
                        ),
                        minimumSize: const Size(320, 51),
                      ),
                          child: const Text(
                            'Mini game',
                            style: TextStyle(
                              fontSize: 18,
                              color: Colors.white,
                            ),
                          ),
                        ),)

              ),
            ],
          ),
        ),))

    );
  }
}

class MiniGameScreen extends StatelessWidget {
  const MiniGameScreen({super.key});

      @override
      Widget build(BuildContext context) {
      return DefaultTabController(length: 2, child: Scaffold(
          appBar: AppBar(backgroundColor: const Color(0xFFF0F2E9),),
          body: const Padding(padding: EdgeInsets.symmetric(horizontal: 45.0),)
      ));


      }
      }
