// Note from author: This was throoown together

const { stub } = require('sinon')

// This is ALWAYS erroring.
const stubbedBrokenModel = () => ({
  remove: stub().yields(new Error()),
  where: stub().returns({
    findOne: (callback) => callback(new Error()),
    exec: (callback) => callback(new Error())
  }),
  findOneAndUpdate: stub().yields(new Error()),
  create: stub().yields(new Error())
})

const generateStubbedModel = (returnData) => ({
  remove: stub().yields(null, returnData),
  where: stub().returns({
    findOne: (callback) => callback(null, returnData),
    exec: (callback) => callback(null, returnData)
  }),
  findOneAndUpdate: stub().yields(null, returnData),
  create: stub().yields(null, returnData)
})

module.exports = {
  WORKING: true,
  BROKEN: false,
  db: function (workingDB) {
    if (workingDB) {
      return {
        Note: generateStubbedModel({
          title: 'Real title',
          creator: 'fakeUserId',
          text: 'lorem is, um doll or sit ad etc.',
          slug: 'fakeSlug'
        }),
        User: generateStubbedModel({
          userId: 'fakeUserId',
          userName: 'Faketon Borp',
          notes: []
        })
      }
    } else {
      return {Note: stubbedBrokenModel(), User: stubbedBrokenModel()}
    }
  }
}
