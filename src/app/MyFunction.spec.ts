import { addation } from './MyFunction'


fdescribe("Test Addation ",()=>{
    fit('Testing Addation functions',()=>{
        expect(addation(100,200)).toBe(300);
    })
})


// describe("String Matcher Test  ",()=>{
//     it('Testing to be ,"To Be " for matcher ===',()=>{
//        let firstname='Thanesh';
//         expect(firstname).toBe('Thanesh');
//     })

//     it('Testing to be ,"To Equal " for matcher ==',()=>{
//         let firstname='Thanesh';
//          expect(firstname).toEqual('Thanesh');
//      })

     
//     it('Testing using "not.TOEqual " wether its not equalr or Not  or not ',()=>{
//         let str="Thanesh";
//         expect(str).not.toEqual('Thanesh 2');
//     })
//     it('Testing to be ,"Not To Be " for matcher ===',()=>{
//         let firstname='Thanesh';
//          expect(firstname).not.toBe('Thanesh2');
//      })
 

     
//     it('Testing to be ,"ToCOntain "Checks wether its present or not ',()=>{
//         let firstname='Thanesh is working in Capgemini';
//          expect(firstname).toContain('Capgemini');
//      })
//     it('Testing to be ,"TOMatch"Checks Regular Expression ',()=>{
//         //\d (digit) matches any single digit (same as [0-9] ). 
//         //The uppercase counterpart \D (non-digit) matches any single character that is not a digit (same as [^0-9] ).

//         let message='CApgemini is my  2nd company ';
//         expect(message).toMatch(/\d+/);
//          expect(message).toMatch("company ");
//      })
// })

// describe ('Array Test',()=>{
//     //x stand for Exclude this , then execute rest all 
//     xit('Testing Array using "TOEquals " Array Shoud be equal or not ',()=>{
//         let a=[1,2,3];
//         expect(a).toEqual([1,2,3]);
//     })

//     it('Testing Array using "ToContains " Array values contained or not ',()=>{
//         let str=['Thanesh','Vijay','Yeshwanth','Gajendra','Bharath'];
//         expect(str).toContain('Thanesh');
//     })
// })
// describe('toBe vs ToEquals',()=>{
//     // ToBe and TO Equal 
//     it('Should Test "ToBe" matchar',()=>{
//         let a={val : 10 };
//         let b={val : 10 };
//        // expect(a).toBe(b); 
//     })
//     // ToBe/ not,toBe / toContain / not.ToContain / toEqual 



// })