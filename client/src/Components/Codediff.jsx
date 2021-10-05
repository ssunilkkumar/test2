import React from 'react'
import ReactDiffViewer from 'react-diff-viewer';


const oldCode = `
const a = 10
const b = 10
const c = () => console.log('foo')

if(a > 10) {
  console.log('bar')
}

console.log('done')
`;
const newCode = `
const a = 10
const boo = 10

if(a === 10) {
  console.log('bar')
}
`

export const Codediff = () => {
    return (
        <div>
            <ReactDiffViewer oldValue={oldCode} newValue={newCode} splitView={false}  />
        </div>
    )
}






