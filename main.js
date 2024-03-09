import './style.css'
import './node_modules/bootstrap/dist/css/bootstrap.min.css'


import 'bootstrap'

import { TimeUnit, convertUnits } from 'measurement-unit-converter';



const squareMillimeters = convertUnits(1, TimeUnit.YEAR, TimeUnit.WEEK);


console.log(squareMillimeters) // Output: "10 square inches are 6451.6 square millimeters"

