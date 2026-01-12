// MongoDB initialization script
// This runs automatically when MongoDB container starts for the first time

// Switch to the target database
db = db.getSiblingDB('soc_chatbot');

// Create collections with validation
db.createCollection('users');
db.createCollection('ueba_results');
db.createCollection('raw_alerts');
db.createCollection('fp_patterns');
db.createCollection('config');

// Create indexes for performance
db.ueba_results.createIndex({ "alert_id": 1 }, { unique: true });
db.ueba_results.createIndex({ "timestamp": -1 });
db.ueba_results.createIndex({ "user": 1 });
db.ueba_results.createIndex({ "host": 1 });
db.ueba_results.createIndex({ "src_ip": 1 });
db.ueba_results.createIndex({ "severity": 1 });
db.ueba_results.createIndex({ "risk_score": -1 });

db.raw_alerts.createIndex({ "timestamp": -1 });
db.raw_alerts.createIndex({ "event_id": 1 });

db.fp_patterns.createIndex({ "pattern_hash": 1 }, { unique: true });

// Create default admin user (password: admin123 - CHANGE THIS!)
db.users.insertOne({
    username: "admin",
    password_hash: "$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/X4.VTtYHKLQJiQzGe",
    role: "admin",
    created_at: new Date(),
    last_login: null
});

print("✓ MongoDB initialized successfully!");
print("  - Collections created: users, ueba_results, raw_alerts, fp_patterns, config");
print("  - Indexes created for performance");
print("  - Default admin user created (username: admin, password: admin123)");
print("");
print("⚠️  IMPORTANT: Change the default admin password after first login!");
