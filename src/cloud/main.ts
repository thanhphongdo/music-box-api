// Define Cloud Functions
import('./functions/user').then(c => new c.UserFunction());
import('./functions/sound_cloud').then(c => new c.SoundCloudFunction());
import('./functions/library').then(c => new c.LibraryFunction());
// Define Triggers
// import('./triggers/post').then(c => new c.PostTrigger());
// import('./triggers/transaction').then(c => new c.TransactionTrigger());

// Define Jobs
// import('./jobs/post').then(c => new c.PostJob());

// Define Live Queries