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
  final TextEditingController _asciiController = TextEditingController();
  String _convertedCharacter = '';

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  void _convertAsciiToCharacter() {
    int asciiCode = int.tryParse(_asciiController.text) ?? 0;
    setState(() {
      _convertedCharacter = String.fromCharCode(asciiCode);
    });
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
            Container(decoration:
            const BoxDecoration(
              borderRadius: BorderRadius.only(
                bottomLeft: Radius.circular(10.0), bottomRight: Radius.circular(10.0))
              , color: Color(0xffffffff),
              ),child: const SizedBox(height: 300,
                child: TabBarView(

                children: [
                  Center(child: Text("1st card")),
                  Center(child: Text("2nd card"))
                ],
              )),),

            Container(
              width: 320,
              height: 274,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(10),
                color: Colors.white,
              ),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  Row(
                    children: [
                      SizedBox(
                          width: 134,
                          height: 51,
                          child: TextField(
                            controller: _asciiController,
                            keyboardType: TextInputType.number,
                            decoration: InputDecoration(
                              border: OutlineInputBorder(
                                borderRadius: BorderRadius.circular(5.0),
                              ),
                            ),
                          )
                      ),

                      ElevatedButton(
                        onPressed: _convertAsciiToCharacter,
                        style: ElevatedButton.styleFrom(
                          backgroundColor: const Color(0xffA0CFD0),
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(3),
                          ),
                          minimumSize: const Size(134, 51),
                        ),
                        child: const Text(
                          'Convert',
                          style: TextStyle(
                            fontSize: 18,
                            color: Colors.black,

                          ),
                        ),
                      ),
                    ],
                  ),

                  Container(
                    width: 281,
                    height: 51,
                    color: const Color(0xffE7F3F3),
                    child: Text(
                      'Wynik: $_convertedCharacter',
                      style: const TextStyle(
                        fontSize: 18,
                        color: Colors.black,

                      ),
                    ),
                  )
                ],
              ),
            ),
            Center(
              child: ElevatedButton(
                onPressed: () {
                  // Działania po naciśnięciu przycisku
                },
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
              ),
            ),
          ],
        ),
      ),))

    );
  }
}
