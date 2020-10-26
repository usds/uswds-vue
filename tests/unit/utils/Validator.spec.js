
"use strict";

const Validator = require('../../../src/utils/Validator');
const Chance = require('chance');
const chance = new Chance();

describe('utils/Validator', () => {

    test('rule:not-defined', async () => {

        let validator = new Validator({required: true, madeuprule: true});
        let errString = null;
        let msg = 'Error: Rule madeuprule does not exist, and no validator given';

        try {
            await validator.run(chance.string({ length: 5 }));
        }
        catch(err){
            errString = err.toString();
        }

        expect(errString).toEqual(msg)
        return;
    })

    test('rule:length', async () => {

        let validator = new Validator({required: true, length: 10});
        
        let test5 = await validator.run(chance.string({ length: 5 }));
        expect(test5).toEqual(false);
        expect(validator.getErrors().length).toEqual(1);
        expect(validator.getPassed().length).toEqual(1);

        let test10 = await validator.run(chance.string({ length: 10 }));
        expect(test10).toEqual(true);
        expect(validator.getErrors().length).toEqual(0);
        expect(validator.getPassed().length).toEqual(2);

        let test12 = await validator.run(chance.string({ length: 12 }));
        expect(test12).toEqual(true);
        expect(validator.getErrors().length).toEqual(0);
        expect(validator.getPassed().length).toEqual(2);

        //Logger.info(pgDoc.dataValues);

        return;

    });


    test('extend', async () => {

        Validator.extend('require-numbers', {
            validator: (val, length) => {
                var count = (val.match(/\d/g) || []).length;
                return (count >= length);
            },
            message: (length) => {
                return {'en': `You must enter at least ${length} characters`}
            }
        });

        let validator = new Validator({'require-numbers': 4});
        let test3 = await validator.run('1a2b3c');
        expect(test3).toEqual(false);
        expect(validator.getErrors().length).toEqual(1);
        expect(validator.getPassed().length).toEqual(0);

        let test4 = await validator.run('a2b3c3dsg2dfh');
        expect(test4).toEqual(true);
        expect(validator.getErrors().length).toEqual(0);
        expect(validator.getPassed().length).toEqual(1);

        let test5 = await validator.run('1a2b3c3dsg2dfh');
        expect(test5).toEqual(true);
        expect(validator.getErrors().length).toEqual(0);
        expect(validator.getPassed().length).toEqual(1);

    });
})

