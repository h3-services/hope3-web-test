import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabase = createClient(
    'https://sykpebdlhqtgpvgqazzw.supabase.co',
    'sb_publishable_N1oGMqijF1J3m9FN8bUWiQ_r7IMZDZk'
);

async function discoverSchema() {
    console.log('🔍 Discovering Supabase Table Schemas...\n');
    console.log('='.repeat(60));

    const tables = ['donors', 'volunteers', 'interest_students'];

    for (const table of tables) {
        console.log(`\n📋 Table: ${table}`);
        console.log('-'.repeat(60));

        try {
            // Try to fetch one record to see the schema
            const { data, error } = await supabase
                .from(table)
                .select('*')
                .limit(1);

            if (error) {
                console.error(`❌ Error: ${error.message}`);
            } else {
                if (data && data.length > 0) {
                    console.log('✅ Sample record found:');
                    console.log(JSON.stringify(data[0], null, 2));
                    console.log('\nColumns:', Object.keys(data[0]).join(', '));
                } else {
                    console.log('⚠️  Table is empty, trying to insert a minimal record...');

                    // Try inserting with minimal data to discover required fields
                    const { data: insertData, error: insertError } = await supabase
                        .from(table)
                        .insert([{}])
                        .select();

                    if (insertError) {
                        console.log('Error details:', insertError.message);
                        console.log('This helps us understand the schema requirements.');
                    }
                }
            }
        } catch (err) {
            console.error(`Error querying ${table}:`, err.message);
        }
    }

    console.log('\n' + '='.repeat(60));
    console.log('💡 Next Steps:');
    console.log('   1. Check the column names above');
    console.log('   2. Update the code to match the actual schema');
    console.log('   3. Verify required vs optional fields');
    console.log('='.repeat(60));
}

discoverSchema();
