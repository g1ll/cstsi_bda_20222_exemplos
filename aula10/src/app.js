import {blogModel} from "./models/blogModel";

let newBlog = {
    title:  'Novo blog do Beltrano',
    author: 'Sicrano',
    body:   'Este é um novo topico no blogo de teste..',
    comments: [{ body: 'interessante...', date: new Date() }],
    date: new Date(Date.now()),
    hidden: false,
}

let novoBlog = new blogModel(newBlog)
novoBlog.save().then(()=>{
    console.log('Salvo pelo mongoose!')
    let comentario = "atualizando objeto com mais comentario"
    novoBlog.comments.push({body: comentario, date: new Date()})
    console.log(novoBlog)
    blogModel.updateOne(
        {_id: novoBlog._id},
        {$set:{ 
            comments:novoBlog.comments
        }}).then(()=>process.exit())
})
