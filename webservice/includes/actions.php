<?php
/**
 * @return array
 */
function getBikes()
{
    return [
        [
            "id" => 1,
            "merk" => "BMW",
            "model" => "R1250GS",
            "image" => "BMWR1250GS.jpg",
        ],
        [
            "id" => 2,
            "merk" => "Yamaha",
            "model" => "MT-10",
            "image" => "YamahaMT-10.jpg",
        ],
        [
            "id" => 3,
            "merk" => "Suzuki",
            "model" => "GSX-S1000GT",
            "image" => "SuzukiGSX-S1000GT.jpg",
        ],
        [
            "id" => 4,
            "merk" => "Honda",
            "model" => "NC750X",
            "image" => "HondaNC750X.jpg",
        ],
        [
            "id" => 5,
            "merk" => "Kawasaki",
            "model" => "Z1000",
            "image" => "KawasakiZ1000.jpg",
        ],
        [
            "id" => 6,
            "merk" => "Ducati",
            "model" => "V4 Panigale",
            "image" => "DucatiV4Panigale.jpg",
        ],
        [
            "id" => 7,
            "merk" => "Ducati",
            "model" => "Multistrada",
            "image" => "DucatiMultistrada.jpg",
        ],
        [
            "id" => 8,
            "merk" => "Suzuki",
            "model" => "GSX 1300R Hayabusa",
            "image" => "SuzukiHayabusa.jpg",
        ]
    ];
}

/**
 * @param $id
 * @return mixed
 */
function getBikeDetails($id)
{
    $tags = [
        1 => [
            "class" => "Class: Adventure",
            "price" => "Price: 21.500,-",
            'engine' => "Engine: 1254cc liquid cooled",
            "compressionRatio" => "Compression Ratio: 12.5 : 1",
            "topSpeed" => "Top Speed: 210.5 km/h",
            "power" => "Power: 134 hp - 100 kW"
        ],
        2 => [
            "class" => "Class: Naked",
            "price" => "Price: 16.999,-",
            'engine' => "Engine: 1254cc liquid cooled",
            "compressionRatio" => "Compression Ratio: 12.0 : 1",
            "topSpeed" => "Top Speed: 265.5 km/h",
            "power" => "Power: 158.2 hp - 97.8 kW"
        ],
        3 => [
            "class" => "Class: SportTour",
            "price" => "Price: 16.499,-",
            'engine' => "Engine: 999cc liquid cooled",
            "compressionRatio" => "Compression Ratio: 12.2 : 1",
            "topSpeed" => "Top Speed: 265.5 km/h",
            "power" => "Power: 150.2 hp - 112 kW"
        ],
        4 => [
            "class" => "Class: Adventure",
            "price" => "Price: 8.999,-",
            'engine' => "Engine: 745cc liquid cooled",
            "compressionRatio" => "Compression Ratio: 10.7 : 1",
            "topSpeed" => "Top Speed: 201.1 km/h",
            "power" => "Power: 54 hp - 40.3 kW"
        ],
        5 => [
            "class" => "Class: Naked",
            "price" => "Price: 16.499,-",
            'engine' => "Engine: 1043cc liquid cooled",
            "compressionRatio" => "Compression Ratio: 11.8 : 1",
            "topSpeed" => "Top Speed: 240.3 km/h",
            "power" => "Power: 138 hp - 101.5 kW"
        ],
        6 => [
            "class" => "Class: SuperSport",
            "price" => "Price: 23.295,-",
            'engine' => "Engine: 1103cc liquid cooled",
            "compressionRatio" => "Compression Ratio: 14.0 : 1",
            "topSpeed" => "Top Speed: 300+ km/h",
            "power" => "Power: 211.2 hp - 157.5 kW"
        ],
        7 => [
            "class" => "Class: Adventure",
            "price" => "Price: 23.090,-",
            'engine' => "Engine: 1198cc liquid cooled",
            "compressionRatio" => "Compression Ratio: 11.5 : 1",
            "topSpeed" => "Top Speed: 260 km/h",
            "power" => "Power: 150 hp - 110.3 kW"
        ],
        8 => [
            "class" => "Class: SportTour",
            "price" => "Price: 21.999,-",
            'engine' => "Engine: 1298cc liquid cooled",
            "compressionRatio" => "Compression Ratio: 11.0 : 1",
            "topSpeed" => "Top Speed: 305 km/h",
            "power" => "Power: 175 hp - 127.6 kW"
        ]
    ];

    return $tags[$id];
}