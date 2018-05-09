/* eslint-env mocha */

import {expect} from 'chai';
import {
    combineAllOf,
    concatenateName,
    getDefName,
    addMethodToDef
} from '../../dynamic/build-models-helpers';

describe('build-models-helpers', () => {
    describe('concatenateName', () => {
        it('prepends `>` and capitalizes', () => {
            const strToConcat = 'taxes';

            expect(concatenateName(strToConcat)).to.eql(' > Taxes');
        });
    });

    describe('combineAllOf', () => {
        it('correctly combines multiple objects into one single one.', () => {
            const CalculateResponse = {
                allOf: [
                    {$ref: '#/definitions/CalculateBase'},
                    {
                        properties: {
                            items: {
                                type: 'string',
                                description: 'foo'
                            }
                        },
                        required: [
                            'items'
                        ]
                    }
                ]
            };

            const defs = {
                CalculateBase: {
                    type: 'object',
                    properties: {
                        charges: {
                            type: 'array',
                            items: {
                                type: 'string',
                                description: 'bar'
                            }
                        }
                    }
                }
            };

            const newCalcResponse = combineAllOf(CalculateResponse.allOf, defs);

            expect(newCalcResponse).to.be.deep.equal({
                properties: {
                    items: {
                        type: 'string',
                        description: 'foo'
                    },
                    charges: {
                        type: 'array',
                        items: {
                            type: 'string',
                            description: 'bar'
                        }
                    }
                }
            });
        });
    });

    describe('getDefName', () => {
        it('returns just the unique part of the definition ref', () => {
            const ref = {
                $ref: '#/definitions/TransactionModel'
            };

            expect(getDefName(ref)).to.eql('TransactionModel');
        });
    });

    describe('addMethodToDef', () => {
        it('pushes method name correctly', () => {
            const schemaRef = {
                $ref: '#/definitions/TransactionModel'
            };

            const methodName = 'CreateTransaction';

            const defs = {
                TransactionModel: {
                    'properties': {
                        foo: 'bar'
                    },
                    'x-methods-used-in': new Set()
                }
            };

            const addResult = addMethodToDef(schemaRef, methodName, defs);

            expect(Array.from(addResult.TransactionModel['x-methods-used-in'])).to.be.deep.eq(['CreateTransaction']);
        });
    });
});
