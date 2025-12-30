import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabase = createClient(
    'https://sykpebdlhqtgpvgqazzw.supabase.co',
    'sb_publishable_N1oGMqijF1J3m9FN8bUWiQ_r7IMZDZk'
);

async function testInsertsWithRLSInfo() {
    console.log('🧪 Testing Supabase Insert Operations\n');
    console.log('Project: Hope3-website');
    console.log('URL: https://sykpebdlhqtgpvgqazzw.supabase.co\n');
    console.log('='.repeat(70));

    const timestamp = Date.now();

    // Test data for each table
    const testData = {
        donors: {
            name: `Test Donor ${timestamp}`,
            email: `donor${timestamp}@test.com`,
            contact_number: '+1234567890'
        },
        volunteers: {
            name: `Test Volunteer ${timestamp}`,
            district: 'Test District',
            volunteer_location: 'Test Location',
            email: `volunteer${timestamp}@test.com`,
            contact_number: '+1234567891'
        },
        interest_students: {
            name: `Test Student ${timestamp}`,
            district: 'Test District',
            passion: 'Technology',
            email: `student${timestamp}@test.com`,
            contact_number: '+1234567892'
        }
    };

    let successCount = 0;
    let failCount = 0;
    const results = [];

    for (const [tableName, data] of Object.entries(testData)) {
        console.log(`\n📝 Testing ${tableName} table...`);
        console.log('-'.repeat(70));

        try {
            const { data: insertedData, error } = await supabase
                .from(tableName)
                .insert([data])
                .select();

            if (error) {
                failCount++;
                console.log(`❌ Insert failed: ${error.message}`);
                console.log(`   Error code: ${error.code}`);

                if (error.message.includes('row-level security')) {
                    console.log(`   ⚠️  RLS Policy is blocking this insert!`);
                }

                results.push({
                    table: tableName,
                    status: 'FAILED',
                    error: error.message,
                    code: error.code
                });
            } else {
                successCount++;
                console.log(`✅ Insert successful!`);
                console.log(`   Inserted ID: ${insertedData[0]?.id || 'N/A'}`);
                console.log(`   Data:`, JSON.stringify(insertedData[0], null, 2));

                results.push({
                    table: tableName,
                    status: 'SUCCESS',
                    data: insertedData[0]
                });
            }
        } catch (err) {
            failCount++;
            console.log(`❌ Unexpected error: ${err.message}`);
            results.push({
                table: tableName,
                status: 'ERROR',
                error: err.message
            });
        }
    }

    // Summary
    console.log('\n' + '='.repeat(70));
    console.log('📊 TEST SUMMARY');
    console.log('='.repeat(70));
    console.log(`✅ Successful: ${successCount}/3`);
    console.log(`❌ Failed: ${failCount}/3`);

    if (failCount > 0) {
        console.log('\n⚠️  ISSUE DETECTED: Row Level Security (RLS) Policies');
        console.log('='.repeat(70));
        console.log('\n🔒 What is RLS?');
        console.log('   Row Level Security controls who can insert/read/update/delete');
        console.log('   data in your tables. Currently, it\'s blocking anonymous inserts.');

        console.log('\n💡 SOLUTION - Choose one option:\n');

        console.log('Option 1: DISABLE RLS (Quick fix for testing)');
        console.log('   ⚠️  WARNING: This makes your tables publicly writable!');
        console.log('   Steps:');
        console.log('   1. Go to: https://supabase.com/dashboard/project/sykpebdlhqtgpvgqazzw');
        console.log('   2. Click "Table Editor" in the left sidebar');
        console.log('   3. For each table (donors, volunteers, interest_students):');
        console.log('      - Click the table name');
        console.log('      - Click the shield icon or "RLS" button');
        console.log('      - Toggle "Enable RLS" to OFF');
        console.log('   4. Re-run this test\n');

        console.log('Option 2: CREATE PERMISSIVE POLICIES (Recommended)');
        console.log('   ✅ Allows inserts while keeping RLS enabled');
        console.log('   Steps:');
        console.log('   1. Go to: https://supabase.com/dashboard/project/sykpebdlhqtgpvgqazzw');
        console.log('   2. Click "Authentication" → "Policies"');
        console.log('   3. For each table, click "New Policy"');
        console.log('   4. Choose "Enable insert access for all users"');
        console.log('   5. Or use this SQL in the SQL Editor:\n');
        console.log('   -- For donors table');
        console.log('   CREATE POLICY "Allow public inserts" ON donors');
        console.log('   FOR INSERT TO anon WITH CHECK (true);\n');
        console.log('   -- For volunteers table');
        console.log('   CREATE POLICY "Allow public inserts" ON volunteers');
        console.log('   FOR INSERT TO anon WITH CHECK (true);\n');
        console.log('   -- For interest_students table');
        console.log('   CREATE POLICY "Allow public inserts" ON interest_students');
        console.log('   FOR INSERT TO anon WITH CHECK (true);\n');

        console.log('Option 3: USE SERVICE ROLE KEY (For backend only)');
        console.log('   ⚠️  NEVER expose this key in frontend code!');
        console.log('   This bypasses RLS completely - only use server-side');

    } else {
        console.log('\n🎉 All inserts successful!');
        console.log('✅ Your Supabase setup is working perfectly!');
        console.log('✅ Forms on your website will work correctly!');
    }

    // Show current record counts
    console.log('\n' + '='.repeat(70));
    console.log('📈 CURRENT DATABASE STATUS');
    console.log('='.repeat(70));

    for (const table of ['donors', 'volunteers', 'interest_students']) {
        const { count, error } = await supabase
            .from(table)
            .select('*', { count: 'exact', head: true });

        if (!error) {
            console.log(`${table.padEnd(20)}: ${count} record(s)`);
        }
    }

    console.log('\n' + '='.repeat(70));
}

// Run the test
testInsertsWithRLSInfo();
